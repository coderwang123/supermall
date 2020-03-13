<template>
    <div class="user-info">
      <div class="avatar">
        <img class="avatar-img" src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="login">
        <div class="left">
          <span class="c1">登录/注册</span>
          <span class="c2"><img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号</span>
        </div>
        <div class="right">
          <span> > </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped>
  .user-info{
    width: 100%;
    height: 100px;
    background-color: var(--color-tint);
    display: flex;
  }
  .avatar{
    width:  90px;
    height: 100px;
    line-height: 100px;
  }
  .avatar-img{
    width: 70px;
    height: 70px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .login{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .login .left{
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
 .c1{
   font-size: 20px;
   color: #FFFFFF;
 }
  .c2{
    color: #FFFFFF;
  }
  .c2 img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  .right{
    width: 50px;
    font-size: 30px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
