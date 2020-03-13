<template>
  <div id="category">
    <!--    头部-->
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <!--    左边的选项卡-->
      <cate-title class="left-content" :categorys="categorys" @cateTitleClick="cateTitleClick"></cate-title>
      <!--    右边的内容-->
      <Scroll class="right-content" ref="scroll">
        <cate-title-info :title-info="titleInfo"></cate-title-info>
        <tab-control ref="tabControl"
                     :title="['综合','新品','销量']"
                     @tabClick="tabClick">
        </tab-control>
        <goods-list :goods="showgoods"></goods-list>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CateTitle from "./childComps/CateTitle";
  import CateTitleInfo from "./childComps/CateTitleInfo";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {itemListenerMixin} from "common/mixin";

  import Scroll from "components/common/scroll/Scroll";
  import {getCategory, getSubcategory, getCategoryDetail} from 'network/category.js'

  export default {
    name: 'Category',
    mixins:[itemListenerMixin],
    data() {
      return {
        categorys: [],
        titleInfo: [],
        titleIndex: 0,
        currentType: 'pop',
        goods: {
          'pop': [],
          'new': [],
          'sell': []
        },
        saveY: 0
      }
    },
    created() {
      this.getCategory()
      // this.getSubcategory(this.categorys[0].maitKey)
    },
    //当组件活跃的记录下滚动的y值 刷新滚动，防抖
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    // 当组件离开的时候保存y值，取消公交事件
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    computed:{
      showgoods(){
        return this.goods[this.currentType]
      }
    },
    methods: {
      // 请求数据
      getCategory() {
        getCategory().then(res => {
          // 1.获取分类数据
          // console.log(res)
          for (let item of res.data.category.list) {
            this.categorys.push(item)
          }
          // 2.获取右边上方内容的数据
          // 一进来就初始化数据
          getSubcategory(this.categorys[this.titleIndex].maitKey).then(res => {
            this.titleInfo = res.data.list
            // console.log(this.titleInfo)
          }),
          this._getCategoryDetail('pop')
          this._getCategoryDetail('new')
          this._getCategoryDetail('sell')
        })
      },
      tabClick(index) {
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
        // console.log(this.currentType)
      },
      // 事件监听
      cateTitleClick(index) {
        this.titleIndex = index
        getSubcategory(this.categorys[this.titleIndex].maitKey).then(res => {
          this.titleInfo = res.data.list
          // console.log(this.titleInfo)
        })
        this._getCategoryDetail('pop')
        this._getCategoryDetail('new')
        this._getCategoryDetail('sell')
      },
      _getCategoryDetail(type){
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categorys[this.titleIndex].miniWallkey
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          // console.log(res)
          const data=res
          for (let item of data){
            this.goods[type] = data
          }
          // console.log(this.goods[type])
        })
      }

    },
    components: {
      NavBar,
      CateTitle,
      CateTitleInfo,
      TabControl,
      GoodsList,
      Scroll
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: hotpink;
    color: #FFFFFF;
    font-weight: bold;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .left-content {
    width: 100px;
    position: relative;
    left: 0;
  }

  .right-content {
    flex: 1;
    position: relative;
    right: 0;
    /*border: 2px solid deeppink;*/
  }
</style>
