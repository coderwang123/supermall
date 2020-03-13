import {debonce} from "./utils";
import BackTop from "components/content/backTop/BackTop";
import {NEW, POP, SELL} from "../../../../HYMall-master/src/common/const";
// 如果组件里使用相同代码的时候 ，可以用混入方法
export const itemListenerMixin ={
  data(){
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    // 1.监听item中全部图片加载完成 （利用事件总线）
    this.newRefresh = debonce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () =>{
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    // console.log('我是混入中的内容')
  }
}

export const backTopMinix = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenerBackTop(position){
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
