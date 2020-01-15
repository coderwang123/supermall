<template>
  <SlideShow>
    <div class="swiper-slide" slot="s-item" v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </div>
  </SlideShow>
</template>

<script>
  import SlideShow from "components/common/slideshow/SlideShow";
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    },
    components:{
      SlideShow
    }
  }
</script>

<style scoped>
  .swiper-slide img {
    width: 100%;
    height: 100%
  }
</style>
