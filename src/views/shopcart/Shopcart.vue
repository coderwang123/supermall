<template>
  <div class="cart">
<!--    购物车导航-->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})
      </div>
      <div slot="right" class="right" @click="del">清空购物车</div>
    </nav-bar>
<!--    购物车内容-->
      <cart-list></cart-list>
<!--    购物车汇总-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: "Shopcart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters(['cartLength'])
    },
    methods:{
      ...mapActions(['del'])
    }
  }
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
  }
  .right{
    width: 100px;
  }
</style>
