<template>
  <Scroll>
    <div class="cate-title"
         v-for="(item,index) in categorys" :key="index"
         :class="{active:currentIndex === index}"
         @click="titleClick(index)">{{item.title}}</div>
  </Scroll>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  export default {
    name: "CateTitle",
    props:{
      categorys: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isActive:false,
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        // this.isActive = !this.isActive
        this.currentIndex = index
        this.$emit('cateTitleClick',index)
      }
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped>

  .cate-title{
    width: 100px;
    height: 45px;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    background-color: #f6f6f6;
  }
  .active{
    background-color: #FFFFFF;
    border-left: 3px solid red;
  }
  .title-scroll{
    width: 100px;
    overflow: hidden;
  }
</style>
