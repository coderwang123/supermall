<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-active-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
        path:String,
        textColor:{
          type:String,
          default:'red'
      }
      },

    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color:this.textColor}:{}
      }
    },
    methods:{
      itemClick(){
        if(this.$route.path != this.path){
          this.$router.replace(this.path)
          console.log(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
</style>
