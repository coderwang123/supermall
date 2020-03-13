<template>
  <div id="app" class="warpper">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
<!--    <router-view/>-->
   <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
export default {
  name:'app',
  components:{
    MainTabBar
  }
}
</script>

<style>
 @import 'assets/css/base.css';
</style>
