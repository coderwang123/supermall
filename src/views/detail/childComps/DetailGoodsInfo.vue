<template>
  <div v-if="Object.keys(detailInfo).length !==0 " class="goods-info">
    <div class="info-desc clear-fix" >
      <div class="start">
      </div>
      <div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item"
        @load="imgLoad" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data(){
      return {
        // counter : 0,事件监听用到的变量记录 这个的个数 如果等于图片加载完的个数 就发送事件
        // imagesLength:0
      }
    },
    methods:{
      // 1.方法
      imgLoad() {
        this.$emit('imgLoad')
      }
      // 监听图片是否完全加载完
      // 2.通过事件监听完成
      // imgLoad(){
      //   // 判断如果图片全部加载完 那么只发送一次监听事件
      //   if(++this.counter === this.imagesLength){
      //     this.$emit('imgLoad')
      //   }
      // }
    },
    // watch:{
    //   detailInfo(){
    //     // 获取图片的个数
    //     this.imagesLength = this.detailInfo.detailImage[0].length
    //   }
    // }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>
