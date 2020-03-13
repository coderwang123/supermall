<template>
  <SlideShow>
    <div class="swiper-slide" slot="s-item" v-for="item in topImages">
      <img :src="item" alt="">
    </div>
  </SlideShow>
</template>

<script>
  import SlideShow from "components/common/slideshow/SlideShow";
  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      SlideShow
    }
  }
</script>

<style scoped>
 .swiper-slide{
   height: 300px;
   overflow: hidden;
 }
 .swiper-slide img{
   width: 100%;
 }
</style>
