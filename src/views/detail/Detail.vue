<template>
  <div id="detail">
    <detail-navBar class="detail-navBar" @detailNavClick="detailNavClick" ref="nav"></detail-navBar>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="detailImgLoad"></detail-goods-info>
      <detail-shop-params ref="dparams" :shop-params="shopParams"></detail-shop-params>
      <detail-comment-info ref="dcomment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="drecommends" :goods="recommends"></goods-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailGoods from "./childComps/DetailGoods";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopParams from "./childComps/DetailShopParams";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import {itemListenerMixin,backTopMinix} from "common/mixin";
  import {debonce} from 'common/utils'
  import {getDetail, Goods, Shop, ShopParams, getRecommend} from 'network/detail'

  import { mapActions } from 'vuex'

  export default {
    name: "Detail",
    mixins: [itemListenerMixin,backTopMinix],// 混入监听图片的代码,混入回到顶部的代码
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        shopParams: {},// 参数信息
        commentInfo: {}, //评论信息
        recommends: [], //商品推荐
        detailTopYs: [],
        getDetailTopYs: null,
        currentIndex: 0
      }
    },
    created() {
      // 1. 保存传入的 iid
      this.iid = this.$route.params.iid

      // 2. 请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res)
        // 1.获取顶部的轮播数据
        const data = res.result
        this.topImages = data.itemInfo.topImages

        // 2.获取商铺信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.获取店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 5.获取商品的参数信息
        this.shopParams = new ShopParams(data.itemParams.info, data.itemParams.rule)

        // 6.获取商店的评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      // 3.请求推荐数据
      getRecommend().then(res => {
        // console.log(res)
        this.recommends = res.data.list
      })

      // 4.给getDetailTopYs赋值
      this.getDetailTopYs = debonce(() => {
        this.detailTopYs = []
        this.detailTopYs.push(0)
        this.detailTopYs.push(this.$refs.dparams.$el.offsetTop - 45)
        this.detailTopYs.push(this.$refs.dcomment.$el.offsetTop - 45)
        this.detailTopYs.push(this.$refs.drecommends.$el.offsetTop - 45)
        this.detailTopYs.push(Number.MAX_VALUE)
        // console.log(this.detailTopYs)
      }, 200)
    },
    destroyed() {
      // 当组件离开销毁时，不监听图片全部加载
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      detailImgLoad() {
        this.newRefresh()
        this.getDetailTopYs()
      },
      detailNavClick(index) {
        this.$refs.scroll.scrollTo(0, -this.detailTopYs[index], 100)
      },
      contentScroll(position) {
        // 1.内容滚动的时候，做与标题的联动效果
        const positionY = -position.y
        // console.log(positionY)
        const length = this.detailTopYs.length
        // for (let i = 0; i < length; i++) {
        //   if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.detailTopYs[i] && positionY < this.detailTopYs[i + 1]) || (i === length - 1 && positionY >= this.detailTopYs[i]))) {
        //     this.currentIndex = i
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        // }
        for(let i = 0 ;i<length-1;i++){
          if(this.currentIndex !== i && (positionY > this.detailTopYs[i] && positionY <this.detailTopYs[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        // 2.回到顶部
        this.listenerBackTop(position)
      },
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.realPrice = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车里(第一种方法)
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res)
        // })

        // 第二种方法（通过actions 辅助函数）
        this.addCart(product).then(res=>{
          this.$toast.show(res,500)
        })
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailShopParams,
      DetailCommentInfo,
      GoodsList,
      Scroll,
      DetailBottomBar
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #FFFFFF;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

  .detail-navBar {
    position: relative;
    background: #FFFFFF;
    z-index: 9;
  }
</style>
