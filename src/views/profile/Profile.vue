<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">商城</div>
    </nav-bar>
    <user-info></user-info>

    <section class="account">
      <div class="account-item account-first" style="border: none">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <div class="Mymessage">
      <div class="one">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="two">
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="three">
        <img src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>


    <div class="Mycart">
      <div class="one">
        <img src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div class="two">
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span>下载购物app</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import UserInfo from "./childComps/UserInfo";
  export default {
    name:'Profile',
    components:{
      NavBar,
      UserInfo
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #FFFFFF;
    font-weight: bold;
  }
  .account {
    display: flex;
  }
  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    border-left: 1px solid #f6f6f6;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }
  .Mymessage{
    border-top: 15px solid #cccccc;
    border-bottom: 15px solid #cccccc;
  }
  .Mymessage img,.Mycart img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-left: 15px;
  }
  .Mymessage div,.Mycart div{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50px;
    font-size: 14px;
    line-height: 50px;
  }
  .Mymessage span,.Mycart span{
    margin-left: 10px;
    flex: 1;
  }
  .one span,.two span{
    border-bottom: 1px solid #f2f5f8;
  }
</style>
