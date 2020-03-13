<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->

      <slot name="s-item"></slot>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    data() {
      return {
        mySwiper: null
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.initSwiper()
      })
    },
   methods:{
     initSwiper(){
         setTimeout(()=>{
           this.mySwiper = new Swiper('.swiper-container', {
             autoplay: {
               delay: 2000,
               stopOnLastSlide: false,
               disableOnInteraction: false,
             },
             loop: true,
             pagination: {
               el: '.swiper-pagination',
             },
             watchSlidesProgress: true,
             observer: true,
             observeParents: true,
           })
         },300)
     }

   },
    components: {
      Swiper
    }
  }
</script>

<style lang="scss">
  #main {


   .swiper-container {
     position: relative;
     width: 100%;
     height: 100%;
     overflow: auto;
     padding: 0 0;
     margin: 0 0;

     height: auto;
      .swiper-wrapper {
       width: 100%;
       height: 100%;
       .swiper-slide {
         width: 100%;
         height: 100%;
         box-sizing: border-box;
         img {
           width: 100%;
           height: 100%;
         }
       }
     }
   }
  }

  .swiper-container {
   --swiper-pagination-color: red;
  }
</style>
