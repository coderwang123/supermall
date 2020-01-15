<template>
  <div id="home" class="warpper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1"
                 :title="['流行','新款','精选']"
                 @tabClick="tabClick"
                 v-show="isTabFixed" class="tab-control">
    </tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadmore">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabControl2"
                   :title="['流行','新款','精选']"
                   @tabClick="tabClick">
      </tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import NavBar from 'components/common/navbar/NavBar'
import Scroll from "../../components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop";

import {getHomeMultiDate,getHomeGoods} from 'network/home.js'
import {debonce} from 'common/utils.js'

  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        dKeywords:[],
        keywords:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    created(){
      // 1.请求多个数据
      this.getHomeMultiDate()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 1.监听item中全部图片加载完成 （利用事件总线）
      const refresh = debonce(this.$refs.scroll.refresh,300)
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
    },
    computed:{
      showgoods(){
        return this.goods[this.currentType].list
      }
    },
    destroyed(){
      console.log('销毁了')
    },
    methods:{
      // 事件监听方法
      tabClick(index){
        // console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.controlIndex = index
        this.$refs.tabControl2.controlIndex = index
        // console.log(this.$refs.tabControl2.controlIndex)
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // 1.判断 BackTop 是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.判断tabControl 是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadmore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        // 2.获取tabControl的 offsetTop
        // 所有的组件都有一个属性$el:勇于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      // 请求数据方法
      getHomeMultiDate(){
        getHomeMultiDate().then(res =>{
              console.log(res);
              this.banners = res.data.banner.list;
              this.dKeywords = res.data.dKeyword.list;
              this.keywords = res.data.keywords.list;
              this.recommends = res.data.recommend.list;
            }
        )
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(
            res => {
              for(let item of res.data.list)
              this.goods[type].list.push(item)
              this.goods[type].page += 1
              this.$refs.scroll.finishPullUp()
              console.log(res)
            }
        )
      }
    },
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      debonce
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    width: 100%;
  }
  .content{
    /*flex: 1;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
