<template>
  <div class="recommend">
    <div class="r-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommedView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style lang="scss">
 .recommend{
   display: flex;
   width: 100%;
   text-align: center;
   flex-direction: row;
   justify-content: space-around;
   font-size: 13px;
   padding: 10px 0 25px;
   box-shadow: 0 8px 8px #eeeeee;
   /*border-bottom: 8px solid #eeeeee;*/
   .r-item{
    flex:1;
     img {
       width: 70px;
       height: 70px;
       margin-bottom: 10px;
       vertical-align: middle;
     }
   }
 }
</style>
