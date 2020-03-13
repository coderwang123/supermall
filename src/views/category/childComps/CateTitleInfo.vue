<template>
  <div class="title-info-wapper">
    <div v-for="(item,index) in titleInfo" :key="index" class="item-info">
      <img :src="item.image" alt="imageLoad" @load="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateTitleInfo",
    props: {
      titleInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
    }
  }
</script>

<style scoped>
  .title-info-wapper {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
  }

  .item-info {
    width: 30%;
    margin-left: 7px;
    padding: 5px 10px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-info img {
    width: 50px;
    height: 50px;
  }
</style>
