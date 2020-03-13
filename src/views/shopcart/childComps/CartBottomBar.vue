<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrices}}
    </div>

    <div class="calculate">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import { mapGetters } from 'vuex'
    export default {
        name: "CartBottomBar",
      components:{
        CheckButton
      },
      computed:{
          ...mapGetters(['cartList','totalPrices','checkLength','isSelectAll']),
      },
      methods:{
        checkClick(){
          if(this.isSelectAll){ // 当他 为 true 的时候会进来判断，此时全部选中
            this.cartList.forEach(item => item.checked =false)
          }else { // 部分或全部未选中
            this.cartList.forEach(item => item.checked =true)
          }
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    bottom: 40px;
    height: 40px;
    background-color: #eee;
    display: flex;
    font-size: 13px;
  }
  .check-content{
    width: 90px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button{
    margin-right: 5px;
    height: 22px;
    width: 22px;
  }
  .price{
    flex: 1;
    line-height: 40px;
    font-size: 15px;
    font-weight: 900;
    color: #666666;
  }
  .calculate{
    text-align: center;
    width: 90px;
    line-height: 40px;
    background-color: red;
    color: #FFFFFF;
  }
</style>
