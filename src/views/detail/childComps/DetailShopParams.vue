<template>
  <div class="shopParams" v-if="Object.keys(shopParams).length !==0 ">
      <table >
        <tr v-for="(sitem,ind) in shopParams.sizes":key="ind" >
          <td  v-for="(item,index) in sitem" :key="index">{{item}}</td>
        </tr>
      </table>
      <table class="set">
        <tr v-for="(sitem,index) in shopParams.set" :key="index">
          <td class="set-key">{{sitem.key}}</td>
          <td class="set-value">{{sitem.value}}</td>
        </tr>
      </table>
    <div class="info-img" v-if="shopParams.image.length !==0">
      <img :src="shopParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopParams",
    props:{
      shopParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shopParams{
    background-color: #FFFFFF;
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shopParams table {
    width: 100%;
    border-collapse: collapse;
 }
  .shopParams table tr{
    height: 42px;
  }
  .shopParams table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .set {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .set-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .set-value{
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
</style>
