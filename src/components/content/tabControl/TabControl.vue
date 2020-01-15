<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in title"
         :class="{active:index === controlIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        controlIndex:0
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index){
        this.controlIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style lang="scss">
  .tab-control {
    display: flex;
    justify-content: space-around;
    height: 40px;
    background-color: #FFFFFF;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    span {
      padding: 5px;
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
</style>
