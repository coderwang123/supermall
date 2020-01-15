<template>
  <div id="detail">
    <detail-navBar></detail-navBar>
    {{iid}}
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  export default {
    name: "Detail",
    data(){
      return {
        iid:null
      }
    },
    created(){
      this.iid = this.$route.params.iid
    },
    components:{
      DetailNavBar
    }
  }
</script>

<style scoped>

</style>
