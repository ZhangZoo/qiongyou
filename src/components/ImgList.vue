<template>
  <div class="flow-wrap">
    <div class="vue-waterfull">
      <!-- 一个动态组件 -->
      <component
        v-for="(imgInfo,index) in imgList"
        :key="imgInfo.id"
        :is="CompList[imgInfo.type]"
        :imgInfo="imgInfo"
        :index = "index"
        :lineNum = "lineNum"
      ></component>
    </div>
  </div>
</template>

<script>
import getData from "utils/getData";
import Normal from "./imgItem/Normal";
import JieBan from "./imgItem/JieBan";
import WenDa from "./imgItem/WenDa";
import Youji from "./imgItem/YouJi";


export default {
  props:['imgList'],
  data() {
    return {
      ImgList: [],
      CompList: {
        biu: Normal,
        bbs: Youji,
        ask: WenDa,
        buddy: JieBan
      },
      newList:this.$store.state.imgList,
      //页码
      page: 1,
      //页面宽度
      cWidth: document.body.clientWidth,
      heightArr: [],
      lineNum: 0
    };
  },
  async created() {
    // let result = await getData.post(
    //   "/biu_list?ajaxID=5cd8d69ef1d508c32233475c",
    //   this.page
    // );
    // console.log(result);
    
    // this.ImgList = result;
    //第一次计算一次宽度
    this.cWidth = document.body.clientWidth-20;
    this.lineNum = parseInt(this.cWidth/168)
    this.$store.commit("pushLineNum",this.lineNum)
    window.onresize = () => {
      //获取到了屏幕的宽度
      this.$store.commit("clearArr")
      this.cWidth = document.body.clientWidth;
      this.lineNum = parseInt(this.cWidth/168)
      this.$store.commit("pushLineNum",this.lineNum)
      //这里调用它的渲染的函数
    };

  },
  mounted() {
    // console.log(this.scroll)
    // this.scroll.on()
  },
  computed:{
  },

  components: {},
  methods: {
  },
  watch: {
    imgList(val){
      // console.log(val)
    }
  }
};
</script>

<style lang='stylus' scoped>
.flow-wrap
  touch-action: none;
  // position: absolute;
  margin: .13rem .13rem 0;
  box-sizing: border-box;
  height 100%;
  .vue-waterfull
    position: relative;
    // overflow hidden
    // float left
    .vue-waterfall-slot
      position: absolute;
      width:1.68rem
</style>