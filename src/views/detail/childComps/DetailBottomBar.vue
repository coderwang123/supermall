<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods:{
        addCart(){
          this.$emit('addToCart')
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #ffffff;
    position: relative;

    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .bottom-bar-left{
    display: flex;
    flex: 1;
    justify-content: space-around;
    font-size: 13px;
  }
  .bottom-bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 5px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bottom-bar-left .service{
    background-position:0 -54px;
  }
  .bottom-bar-left .shop {
    background-position:0 -98px;
  }
  .bottom-bar-right{
    display: flex;
    flex: 1;
    font-size: 15px;
    line-height: 49px;
    text-align: center;
  }
  .cart{
    width: 50%;
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    width: 50%;
    font-weight: 900;
    background-color: #f69;
    color: #FFFFFF;
  }
</style>
