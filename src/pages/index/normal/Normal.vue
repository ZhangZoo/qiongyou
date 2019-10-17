<template>
  <div id="normal">
    <div class="contentwrap">
      <!-- 头部 -->
      <div class="user_head">
        <span data-bn-ipg="m-post-detail-author" class="user_info">
          <img :src="imgInfo.avator" class="user_avatar" />
          <span class="user_name">{{imgInfo.username}}</span>
        </span>
        <span
          data-bn-ipg="m-post-detail-followID"
          data-wakeset="{&quot;track&quot;:&quot;campaign=post_h5&amp;category=followID&quot;,&quot;schema&quot;:&quot;post/detail?id=788230&quot;,&quot;frameset&quot;:{&quot;ifurl&quot;:&quot;https://m.qyer.com/feeds/p/TjSFY57U8F9dOLFGMymrCg.html&quot;,&quot;iftitle&quot;:&quot;&quot;}}"
          class="add_focus"
        >
          <span class="add_focus_icon"></span>
          关注
        </span>
      </div>
      <!-- 轮播 -->
      <div data-v-49c425b8 class="lunbo">
        <!---->
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <img :src="(imgInfo.cover?imgInfo.cover:'')" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="(imgInfo.cover?imgInfo.cover:'')" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 固定的内容信息 -->
      <div class="artical_box">
        <div class="artical_content" :style="showInfo">
          不走出去，永远不知道世界有多大❗️
          <br />在新西兰🇳🇿南岛旅行，我们放弃了热门的牧羊人教堂和冰川，选择一路向南，来到最南端的城市Invercargill 因佛卡吉尔。从这里不用走很远就能到达“世界边端”Bluff，由于天气不是很稳定，这晚我们决定在这座城市落脚。
          <br />
          <br />在Airbnb找民宿，忽见一家图片非常诱人，有特色且价格不贵的房子🏠，然而留言处没有一条住宿评价，忐忑犹豫该不该定。但好像又找不到更吸引的，于是我决定冒险一次，预订了。
          <br />我们一边与房东沟通，一边按照导航，好不容易找到了入口。进入我们眼帘的农场般大的草坪，道路两旁的树木🌲被修剪🉐️整整齐齐但不规则，羊群🐑在草地上肆意奔跑，一个比人高的“针线”伫立在草坪，与周围的环境融为一体。
          <br />
          <br />不对，这哪是一个普通房子和民宿，简直就是一个庄园❗️
          <br />
          <br />我们停下车，他们热情地招呼我们，领我们参观房子各角落，介绍厨房在哪里，告诉我们冰箱的东西可以随便吃，也可以自己做饭，当自己家就可以了。Christine说这次是他们第一次当房东，我们是第一位客人，他们没有经验，如果有什么不周到记得要提醒她。我确实感到很意外，但总算明白了评价空白的原因。
          <br />
          <br />晚饭后，我们在大厅里闲坐，儿子在耍木钢琴🎹，我赶紧制止，应该也是价值连城。房东夫妇过来与我们寒暄，我说我留意到墙上许多机车的油画，是他们自己画的吗？Ross说其实因为他是机车迷才收集的，他家里的那辆机车比跑车还贵，曾经他们与一班机车发烧友带着自己的机车穿洋过海，在太平洋彼岸的智利🇨🇱飙车，他还向我展示当时的照片，滔滔不绝地讲述着这一段不可复制的经历，当时的我从心底羡慕这对夫妻，他们过着我向往的神仙眷侣般的生活❗️
          <br />
          <br />我问及他们是否已经退休，他们摇摇头说即使从女儿出嫁，儿子毕业🎓出来工作，他们还是会继续热爱的事业，就是做家具。我恍然大悟，原来房子里的家具都是出自男主人Ross之手。Ross负责在家具厂制造家具，而Christine就负责打理在镇中心的家具店，两夫妇互相扶持、共同打拼，才有今日的成就，也是不容易。
          <br />
          <br />意外的民宿让我得到意外的收获，才明白生活的本意就是爱❤️
          <br />
          <br />【实用信息】
          <br />民宿名字：Homestead Retreat
          <br />📍地址：67 Otatara Road, 奥塔塔拉, Invercargill，新西兰南岛
          <br />💰价格：550-690元（含早）
          <br />
          <a
            href="//m.qyer.com/tag/wzgcC45NhRQ/biu/"
            data-bn-ipg="m-post-detail-inlink"
            id="2615"
            style="display: inline-block;white-space: nowrap;color:#0095D0;text-decoration:none; margin:0 5px 0 5px;"
          >
            <img
              src="https://fes.qyerstatic.com/FmPShahZ7unF29C6Woe-FF7_B46F?imageslim"
              style="height:12px;width:12px;dispaly:inline-block;margin-right:2px"
            />
            <span
              style="max-width: 320px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: inline-block;vertical-align: middle;margin-bottom: 2px;"
            >因弗卡吉尔</span>
          </a>
          <!-- 推荐 -->
          <div class="recommend_content" :style="`height:`+heightData+`px`">
            <div data-v-1288afcb class="recommend_font">
              <span data-v-1288afcb>相关推荐</span>
            </div>
            <div data-v-1288afcb class="vue-waterfall">
                <LikeComp
                  v-for="(like,index) in likeList"
                  :key="like.id"
                  :imgInfo="like"
                  :index = "index"
                  :lineNum = "lineNum"
                ></LikeComp>
            </div>
          </div>
        </div>
        <!-- 点击展开更多 -->
        <div class="click_expand_article" :style="(isShow?'':'display:none')">
          <div class="expand_article" @click="ShowMore">
            <span>展开全部</span>
            <span class="expend_xiala"></span>
          </div>
        </div>
        <!-- 小图标 -->
        <div>
          <div data-bn-ipg="m-post-detail-tag" class="tag_box">
            <a href="//m.qyer.com/tag/4XhB4x7afx0/biu/" class="tag tag_red">
              <span class="poi_tag singal_tag_red"></span>
              <span>我的旅行源动力</span>
            </a>
          </div>
        </div>
      </div>
      <!-- 发布日期 -->
      <div class="release">
        <span class="release_time">发布于5天前</span>
      </div>
      <!--喜欢-->
      <div data-v-174fafd2 class="icon_box">
        <div
          data-wakeset="{&quot;track&quot;:&quot;campaign=post_h5&amp;category=collection&quot;,&quot;schema&quot;:&quot;post/detail?id=788230&quot;,&quot;frameset&quot;:{&quot;ifurl&quot;:&quot;https://m.qyer.com/feeds/p/TjSFY57U8F9dOLFGMymrCg.html&quot;,&quot;iftitle&quot;:&quot;&quot;}}"
          class="icon collect"
        >
          <span data-v-174fafd2 class="icon_count">33</span>
        </div>
        <div
          data-wakeset="{&quot;track&quot;:&quot;campaign=post_h5&amp;category=comment&quot;,&quot;schema&quot;:&quot;post/detail?id=788230&quot;,&quot;frameset&quot;:{&quot;ifurl&quot;:&quot;https://m.qyer.com/feeds/p/TjSFY57U8F9dOLFGMymrCg.html&quot;,&quot;iftitle&quot;:&quot;&quot;}}"
          class="icon message"
        >
          <span data-v-174fafd2 class="icon_count">47</span>
        </div>
        <div
          data-v-174fafd2
          data-bn-ipg="m-post-detail-like"
          data-wakeset="{&quot;track&quot;:&quot;campaign=post_h5&amp;category=like&quot;,&quot;schema&quot;:&quot;post/detail?id=788230&quot;,&quot;frameset&quot;:{&quot;ifurl&quot;:&quot;https://m.qyer.com/feeds/p/TjSFY57U8F9dOLFGMymrCg.html&quot;,&quot;iftitle&quot;:&quot;&quot;}}"
          class="icon like"
        >
          <span data-v-174fafd2 class="icon_count">445</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// var VueTouch = require('vue-touch')
// Vue.use(VueTouch)

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "styles/swiper.min.css";
import getData from "utils/getHotel";
import LikeComp from "components/imgItem/Like.vue"
export default {
  data() {
    return {
      isShow: true,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        paginationClickable: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        loop: false
      },
      showInfo: "display: inline-block; height: 607px; overflow: hidden;",
      imgInfo: {},
      likeList: [],
      lineNum: 0,
      cWidth: document.body.clientWidth,
    };
  },
  components: {
    swiper,
    swiperSlide,
    LikeComp
  },
  methods: {
    async ShowMore() {
      this.isShow = false;
      this.showInfo = "display: inline-block;";
      // 发送ajax请求
      let arr = this.imgInfo.url.split("/");
      let id = arr[arr.length - 1].split(".")[0];
      // console.log(id)
      let url = "http://localhost:8080/imgInfo/" + id + ".json";
      let result = await getData.get(url);
      this.likeList = result.data;
    }
  },
  async created() {
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
    this.imgInfo = this.$store.state.imgInfo;
  },
  computed:{
    heightData() {
      return Math.max.apply(false, this.$store.state.heightArr) + 60;
    }
  }
};
</script>

<style lang='stylus' scoped>
#normal {
  height: 100%;
  overflow-y: scroll;

  .contentwrap {
    background: #fff;
    width: 100%;
    margin: 0 auto;
    max-width: 7.8rem;
    overflow: hidden;
  }
}

.user_head {
  display: flex;
  align-items: center;
  height: 0.6rem;
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
  justify-content: space-between;

  .user_info {
    display: flex;
    align-items: center;

    .user_avatar {
      height: 0.35rem;
      width: 0.35rem;
      border-radius: 50%;
      display: inline-block;
      margin-right: 10px;
    }

    .user_name {
      font-size: 0.15rem;
      font-family: PingFangSC-Semibold;
    }
  }

  .add_focus {
    height: 0.25rem;
    width: 0.58rem;
    text-align: center;
    line-height: 0.225rem;
    font-size: 0.13rem;
    border: 1px solid #000;
    border-radius: 100px;
    font-family: PingFangSC-Medium;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .add_focus_icon {
      height: 0.08rem;
      width: 0.08rem;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhbPms6g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTE2IiBoZWlnaHQ9IjUwIiByeD0iMjUiPjwvcmVjdD4KICAgICAgICA8ZmlsdGVyIHg9Ii00My4xJSIgeT0iLTgwLjAlIiB3aWR0aD0iMTg2LjIlIiBoZWlnaHQ9IjMwMC4wJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIxMCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlTW9ycGhvbG9neSByYWRpdXM9IjIiIG9wZXJhdG9yPSJlcm9kZSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0lubmVyIj48L2ZlTW9ycGhvbG9neT4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMTAiIGluPSJzaGFkb3dJbm5lciIgcmVzdWx0PSJzaGFkb3dJbm5lciI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIGluMj0ic2hhZG93SW5uZXIiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlQ29tcG9zaXRlPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4yNzA1ODgyMzUgICAwIDAgMCAwIDAuNzg0MzEzNzI1ICAgMCAwIDAgMCAwLjQyMzUyOTQxMiAgMCAwIDAgMC4yIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJub3JtYWwtaDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuODAwMDAwMDEyIj4KICAgICAgICA8ZyBpZD0iMDMt5YWo6YOoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjI0LjAwMDAwMCwgLTI5Ni4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InRpdGxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDI2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLlhbPms6giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3NC4wMDAwMDAsIDEwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtMTIiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0yKSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InNxdWFyZSIgeD0iMSIgeT0iMSIgd2lkdGg9IjExNCIgaGVpZ2h0PSI0OCIgcng9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi42NjY2NjY3LDIzLjY2NjY2NjcgTDI2LjY2NjY2NjcsMTguMzMzMzMzMyBDMjYuNjY2NjY2NywxNy41OTY5NTM3IDI3LjI2MzYyMDMsMTcgMjgsMTcgQzI4LjczNjM3OTcsMTcgMjkuMzMzMzMzMywxNy41OTY5NTM3IDI5LjMzMzMzMzMsMTguMzMzMzMzMyBMMjkuMzMzMzMzMywyMy42NjY2NjY3IEwzNC42NjY2NjY3LDIzLjY2NjY2NjcgQzM1LjQwMzA0NjMsMjMuNjY2NjY2NyAzNiwyNC4yNjM2MjAzIDM2LDI1IEMzNiwyNS43MzYzNzk3IDM1LjQwMzA0NjMsMjYuMzMzMzMzMyAzNC42NjY2NjY3LDI2LjMzMzMzMzMgTDI5LjMzMzMzMzMsMjYuMzMzMzMzMyBMMjkuMzMzMzMzMywzMS42NjY2NjY3IEMyOS4zMzMzMzMzLDMyLjQwMzA0NjMgMjguNzM2Mzc5NywzMyAyOCwzMyBDMjcuMjYzNjIwMywzMyAyNi42NjY2NjY3LDMyLjQwMzA0NjMgMjYuNjY2NjY2NywzMS42NjY2NjY3IEwyNi42NjY2NjY3LDI2LjMzMzMzMzMgTDIxLjMzMzMzMzMsMjYuMzMzMzMzMyBDMjAuNTk2OTUzNywyNi4zMzMzMzMzIDIwLDI1LjczNjM3OTcgMjAsMjUgQzIwLDI0LjI2MzYyMDMgMjAuNTk2OTUzNywyMy42NjY2NjY3IDIxLjMzMzMzMzMsMjMuNjY2NjY2NyBMMjYuNjY2NjY2NywyMy42NjY2NjY3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
      background-size: cover;
      display: inline-block;
      margin-right: 0.05rem;
    }
  }
}

.lunbo {
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
  min-height: 281px;

  .swiper-container {
    position: relative;

    // height: 1.8rem;
    .swiper-wrapper {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.artical_box {
  position: relative;
  margin-top: 0.09rem;

  .artical_content {
    width: 100%;
    min-height: 9px;
    padding: 0 15px;
    font-size: 0.15rem;
    line-height: 0.24rem;
    font-family: PingFang-SC-Regular;
  }

  .click_expand_article {
    height: 0.65rem;
    display: flex;
    font-family: PingFangSC-Semibold;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: -1px;
    width: 100%;
    padding-top: 1.2rem;
    font-size: 0.12rem;
    background-image: linear-gradient(-180deg, hsla(0, 0%, 100%, 0), #fff 65%);

    .expand_article {
      padding: 0 27px;
      display: flex;
      align-items: center;
      line-height: 0.35rem;
      color: #00cfa1;
      font-weight: 700;
      border: 1px solid #00cfa1;
      border-radius: 100px;
      font-family: PingFangSC;

      .expend_xiala {
        display: inline-block;
        height: 0.1rem;
        width: 0.1rem;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJub3JtYWwtaDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLliIflm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzcuMDAwMDAwLCAtMjEzLjAwMDAwMCkiIGZpbGw9IiMwMEQwQTEiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0MDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Ny4wMDAwMDAsIDIxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS42NjY2NjY3LDE3IEw0LDE3IEMzLjQ0NzcxNTI1LDE3IDMsMTYuNTUyMjg0NyAzLDE2IEwzLDE1LjY2NjY2NjcgQzMsMTUuMTE0MzgxOSAzLjQ0NzcxNTI1LDE0LjY2NjY2NjcgNCwxNC42NjY2NjY3IEwxNC42NjY2NjY3LDE0LjY2NjY2NjcgTDE0LjY2NjY2NjcsNCBDMTQuNjY2NjY2NywzLjQ0NzcxNTI1IDE1LjExNDM4MTksMyAxNS42NjY2NjY3LDMgTDE2LDMgQzE2LjU1MjI4NDcsMyAxNywzLjQ0NzcxNTI1IDE3LDQgTDE3LDE2IEMxNywxNi41NTIyODQ3IDE2LjU1MjI4NDcsMTcgMTYsMTcgTDE1LjY2NjY2NjcsMTcgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHktNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuMDAwMDAwLCAtMTAuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
        background-size: cover;
        margin-left: 5px;
      }
    }
  }
}

.tag_box {
  display: flex;
  padding: 0 15px;
  cursor: pointer;

  .tag_red {
    border: 1px solid #ff5159;
    color: #ff5159;
  }

  .tag {
    border-radius: 100px;
    height: 0.2rem;
    padding: 1px 10px;
    display: flex;
    align-items: center;
    font-size: 0.13rem;
    border: 1px solid #7791bb;
    color: #7791bb;
    margin-top: 0.1rem;
    font-family: PingFangSC-Regular;
    line-height: 0.165rem;
    text-decoration: none;

    .singal_tag_red {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAxMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTUzLjc4OTQxMSUiIHkxPSI1MCUiIHgyPSItMzEuNDg1NDIxMyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGN0UzMiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYwMEEzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Im5vcm1hbC1oNSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1My4wMDAwMDAsIC0zNzkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJ0YWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjAwMDAwMCwgMjk5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExLUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIyLjAwMDAwMCwgNzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtQ29weS00IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiIgY3g9IjE1IiBjeT0iMTUiIHI9IjE1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDEwIEwxMCw4LjUzODQ2MTU0IEMxMCw3LjY4ODc5MjY5IDEwLjY4ODc5MjcsNyAxMS41Mzg0NjE1LDcgQzEyLjM4ODEzMDQsNyAxMy4wNzY5MjMxLDcuNjg4NzkyNjkgMTMuMDc2OTIzMSw4LjUzODQ2MTU0IEwxMy4wNzY5MjMxLDEwIEwxNi45MjMwNzY5LDEwIEwxNi45MjMwNzY5LDguNTM4NDYxNTQgQzE2LjkyMzA3NjksNy42ODg3OTI2OSAxNy42MTE4Njk2LDcgMTguNDYxNTM4NSw3IEMxOS4zMTEyMDczLDcgMjAsNy42ODg3OTI2OSAyMCw4LjUzODQ2MTU0IEwyMCwxMCBMMjEuNDYxNTM4NSwxMCBDMjIuMzExMjA3MywxMCAyMywxMC42ODg3OTI3IDIzLDExLjUzODQ2MTUgQzIzLDEyLjM4ODEzMDQgMjIuMzExMjA3MywxMy4wNzY5MjMxIDIxLjQ2MTUzODUsMTMuMDc2OTIzMSBMMjAsMTMuMDc2OTIzMSBMMjAsMTYuOTIzMDc2OSBMMjEuNDYxNTM4NSwxNi45MjMwNzY5IEMyMi4zMTEyMDczLDE2LjkyMzA3NjkgMjMsMTcuNjExODY5NiAyMywxOC40NjE1Mzg1IEMyMywxOS4zMTEyMDczIDIyLjMxMTIwNzMsMjAgMjEuNDYxNTM4NSwyMCBMMjAsMjAgTDIwLDIxLjQ2MTUzODUgQzIwLDIyLjMxMTIwNzMgMTkuMzExMjA3MywyMyAxOC40NjE1Mzg1LDIzIEMxNy42MTE4Njk2LDIzIDE2LjkyMzA3NjksMjIuMzExMjA3MyAxNi45MjMwNzY5LDIxLjQ2MTUzODUgTDE2LjkyMzA3NjksMjAgTDEzLjA3NjkyMzEsMjAgTDEzLjA3NjkyMzEsMjEuNDYxNTM4NSBDMTMuMDc2OTIzMSwyMi4zMTEyMDczIDEyLjM4ODEzMDQsMjMgMTEuNTM4NDYxNSwyMyBDMTAuNjg4NzkyNywyMyAxMCwyMi4zMTEyMDczIDEwLDIxLjQ2MTUzODUgTDEwLDIwIEw4LjUzODQ2MTU0LDIwIEM3LjY4ODc5MjY5LDIwIDcsMTkuMzExMjA3MyA3LDE4LjQ2MTUzODUgQzcsMTcuNjExODY5NiA3LjY4ODc5MjY5LDE2LjkyMzA3NjkgOC41Mzg0NjE1NCwxNi45MjMwNzY5IEwxMCwxNi45MjMwNzY5IEwxMCwxMy4wNzY5MjMxIEw4LjUzODQ2MTU0LDEzLjA3NjkyMzEgQzcuNjg4NzkyNjksMTMuMDc2OTIzMSA3LDEyLjM4ODEzMDQgNywxMS41Mzg0NjE1IEM3LDEwLjY4ODc5MjcgNy42ODg3OTI2OSwxMCA4LjUzODQ2MTU0LDEwIEwxMCwxMCBaIE0xNi45MjMwNzY5LDEzLjA3NjkyMzEgTDEzLjA3NjkyMzEsMTMuMDc2OTIzMSBMMTMuMDc2OTIzMSwxNi45MjMwNzY5IEwxNi45MjMwNzY5LDE2LjkyMzA3NjkgTDE2LjkyMzA3NjksMTMuMDc2OTIzMSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    }

    .poi_tag {
      display: inline-block;
      height: 0.15rem;
      width: 0.15rem;
      background-size: cover;
      margin-right: 2px;
    }
  }
}

.release {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px 3px;

  .release_time {
    font-size: 0.12rem;
    color: #9f9f9f;
  }
}

.icon_box {
  text-align: right;
  padding-right: 0.35rem;
  margin-bottom: 0.07rem;
  margin-top: 0.07rem;

  .collect {
    margin-right: 0.46rem;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19jb2xsZWN0X25vcm1hbCBjb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ibm9ybWFsLWg1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDAwMDAwLCAtNTM1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i54K56K+E6LWeIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDUzNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmlLbol48iPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjE1MzY5MjQsNDIuMjkyMzg0MiBMMTMuOTkxMjg4LDQ3LjUwNTUzMjMgQzEyLjk5MDQ4NDEsNDcuOTcyOTM1MSAxMS44MDAyNjc0LDQ3LjU0MDUyODEgMTEuMzMyODY0Nyw0Ni41Mzk3MjQyIEMxMS4xNzM5MzY5LDQ2LjE5OTQyNzcgMTEuMTE0MDQwNiw0NS44MjEyNTczIDExLjE2MDAzMjUsNDUuNDQ4NTA0OCBMMTIuNjY4NjU4MywzMy4yMjE0NzYgQzEyLjc0MTE1MzcsMzIuNjMzOTE5IDEyLjU0OTYxODgsMzIuMDQ0NDM1MSAxMi4xNDU2MTE0LDMxLjYxMTcwMzMgTDMuNzM4MjQwMzEsMjIuNjA2NTc3MiBDMi45ODQ0NDg0NCwyMS43OTkxOTE1IDMuMDI3ODk0NzksMjAuNTMzNjA3MSAzLjgzNTI4MDQ0LDE5Ljc3OTgxNTIgQzQuMTA5ODEwMjEsMTkuNTIzNTA4NiA0LjQ1MDk2MjcxLDE5LjM0OTY4MjcgNC44MTk2ODM2OSwxOS4yNzgyMzY3IEwxNi45MTQ0NzAxLDE2LjkzNDY2NTQgQzE3LjQ5NTY3MjQsMTYuODIyMDQ3NiAxNy45OTcxMTczLDE2LjQ1NzcyNjUgMTguMjgzODI0NiwxNS45Mzk3NzEyIEwyNC4yNTAxODc5LDUuMTYxMTQ5MDcgQzI0Ljc4NTEyMjgsNC4xOTQ3NTQ1MSAyNi4wMDIxOTA3LDMuODQ0OTg3MzQgMjYuOTY4NTg1Myw0LjM3OTkyMjIzIEMyNy4yOTcxODE4LDQuNTYxODEyNDUgMjcuNTY3OTIxOSw0LjgzMjU1MjYxIDI3Ljc0OTgxMjEsNS4xNjExNDkwNyBMMzMuNzE2MTc1NCwxNS45Mzk3NzEyIEMzNC4wMDI4ODI3LDE2LjQ1NzcyNjUgMzQuNTA0MzI3NiwxNi44MjIwNDc2IDM1LjA4NTUyOTksMTYuOTM0NjY1NCBMNDcuMTgwMzE2MywxOS4yNzgyMzY3IEM0OC4yNjQ3MTYxLDE5LjQ4ODM1NzcgNDguOTczNDU5MiwyMC41Mzc3NzQxIDQ4Ljc2MzMzODIsMjEuNjIyMTczOSBDNDguNjkxODkyMiwyMS45OTA4OTQ5IDQ4LjUxODA2NjMsMjIuMzMyMDQ3NCA0OC4yNjE3NTk3LDIyLjYwNjU3NzIgTDM5Ljg1NDM4ODYsMzEuNjExNzAzMyBDMzkuNDUwMzgxMiwzMi4wNDQ0MzUxIDM5LjI1ODg0NjMsMzIuNjMzOTE5IDM5LjMzMTM0MTcsMzMuMjIxNDc2IEw0MC44Mzk5Njc1LDQ1LjQ0ODUwNDggQzQwLjk3NTIyODYsNDYuNTQ0NzYxMiA0MC4xOTYxODc5LDQ3LjU0MzEwMzQgMzkuMDk5OTMxNCw0Ny42NzgzNjQ1IEMzOC43MjcxNzg5LDQ3LjcyNDM1NjQgMzguMzQ5MDA4NCw0Ny42NjQ0NiAzOC4wMDg3MTIsNDcuNTA1NTMyMyBMMjYuODQ2MzA3Niw0Mi4yOTIzODQyIEMyNi4zMDk5MSw0Mi4wNDE4NzE5IDI1LjY5MDA5LDQyLjA0MTg3MTkgMjUuMTUzNjkyNCw0Mi4yOTIzODQyIFoiIGlkPSJTdGFyIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MjcyNzMsMjcuNSBDMTkuNjAzMjMxNCwyNy41IDIwLjY4MTgxODIsMjUuOTc0NjQ4IDIwLjY4MTgxODIsMjQuMDkzMDMxIEMyMC42ODE4MTgyLDIyLjIxMTQxMzkgMTUuODYzNjM2NCwyMi4yMTE0MTM5IDE1Ljg2MzYzNjQsMjQuMDkzMDMxIEMxNS44NjM2MzY0LDI1Ljk3NDY0OCAxNi45NDIyMjMxLDI3LjUgMTguMjcyNzI3MywyNy41IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzMuNzI3MjcyNywyNy41IEMzNS4wNTc3NzY5LDI3LjUgMzYuMTM2MzYzNiwyNS45NzQ2NDggMzYuMTM2MzYzNiwyNC4wOTMwMzEgQzM2LjEzNjM2MzYsMjIuMjExNDEzOSAzMS4zMTgxODE4LDIyLjIxMTQxMzkgMzEuMzE4MTgxOCwyNC4wOTMwMzEgQzMxLjMxODE4MTgsMjUuOTc0NjQ4IDMyLjM5Njc2ODYsMjcuNSAzMy43MjcyNzI3LDI3LjUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHktMyIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMDAwMDAwIiB4PSIyMy42IiB5PSIyOC43MDQ1NDU1IiB3aWR0aD0iNC44MTgxODE4MiIgaGVpZ2h0PSI0LjgxODE4MTgyIiByeD0iMi40MDkwOTA5MSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
  }

  .icon {
    display: inline-block;
    height: 0.25rem;
    width: 0.25rem;
    position: relative;
    background-size: cover;
    cursor: pointer;

    .icon_count {
      position: absolute;
      top: -6px;
      font-size: 0.13rem;
      line-height: 0.155rem;
      font-family: DINCondensed-Bold;
    }
  }

  .message {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19jb21tZW50X25vcm1hbCBjb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ibm9ybWFsLWg1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgyLjAwMDAwMCwgLTUzNS4wMDAwMDApIj4KICAgICAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1MCIgaGVpZ2h0PSI4MTgiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9IueCueivhOi1niIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCA1MzUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6K+E6K66IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjEuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yNzAyNzAzLDI2LjYxNTc0NzggQzE4LjI0MDU4MzQsMjYuNjE1NzQ3OCAxOS44Mzc4Mzc4LDI1LjAxODQ5MzQgMTkuODM3ODM3OCwyMy4wNDgxODAzIEMxOS44Mzc4Mzc4LDIxLjA3Nzg2NzEgMTIuNzAyNzAyNywyMS4wNzc4NjcxIDEyLjcwMjcwMjcsMjMuMDQ4MTgwMyBDMTIuNzAyNzAyNywyNS4wMTg0OTM0IDE0LjI5OTk1NzEsMjYuNjE1NzQ3OCAxNi4yNzAyNzAzLDI2LjYxNTc0NzggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMzUuNDcyNjU2MiAyMC4zMDE1OTk1IDI5LjM1MTM1MTQgMjMuODQ0MTk4NyAzNS43MzA2MTM5IDI3LjIzNTM5MTIiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQtQ29weSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMuNSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS41NzgwMDEyLDQyLjgzMzUyMjggQzE3Ljc4NjYwMTEsNDQuMDEwMjgwOSAxNC45OTg1MDU5LDQ1LjUzMzQ4NTEgMTEuMjEzNzE1Nyw0Ny40MDMxMzU0IEMxMS4xMDI5MDEzLDQ3LjQ1Nzg3NjcgMTAuOTc1NzM5NSw0Ny40Njk2Mzc0IDEwLjg1Njc2NSw0Ny40MzYxNDg0IEMxMC41OTA5MzI4LDQ3LjM2MTMyMTggMTAuNDM2MDkyMSw0Ny4wODUxNjMzIDEwLjUxMDkxODYsNDYuODE5MzMxMSBMMTIuMzY5NTM5LDQwLjIxNjM5ODQgQzYuNDMzODE1MjgsMzYuODc3MjQ5MyAyLjM3NTA5MzMyLDMxLjA5MzQ0MTggMi4wMjQyNDcwOCwyNC4zMzEzMTQxIEMxLjQ0ODI4MDI4LDEzLjIzMDI2NTggMTEuMDgzMjAyNiwzLjY5NjM3MDQ1IDIzLjU0NDQ0ODQsMy4wMzY3NjI5MyBDMzYuMDA1Njk0MywyLjM3NzE1NTQgNDYuNTc0NDQzMywxMC44NDE2MTU2IDQ3LjE1MDQxMDEsMjEuOTQyNjY0IEM0Ny43MjYzNzY5LDMzLjA0MzcxMjQgMzguMDkxNDU0Niw0Mi41Nzc2MDc3IDI1LjYzMDIwODcsNDMuMjM3MjE1MiBDMjMuNTQ3MzIyOCw0My4zNDc0NjggMjEuNTE3MzExLDQzLjIwMjgwNTEgMTkuNTc4MDAxMiw0Mi44MzM1MjI4IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    margin-right: 0.46rem;
  }

  .like {
    background-image: url('data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ5LjcgNDYiPjx0aXRsZT5pY19saWtlX25vcm1hbCAgNTB4NTA8L3RpdGxlPjxnIGlkPSJub3JtYWwtaDUiPjxnIGlkPSLliIflm74iPjxnIGlkPSLngrnor4TotZ4iPjxnIGlkPSLotZ4tY29weSI+PHBhdGggZD0iTTI0LjkyLDQ4LjVhNS41OSw1LjU5LDAsMCwxLTMuMi0xYy0uNjYtLjQxLTEuNjktMS4yNC0zLjYxLTIuOC0yLjQ5LTItNC44MS00LjA1LTYuODctNi4wNkE1My41Nyw1My41NywwLDAsMSwzLjQ2LDI5LjVhMjQuOSwyNC45LDAsMCwxLTIuMDctMy44OCwyLjksMi45LDAsMCwxLS4xMi0uMzEsMTQuNTQsMTQuNTQsMCwwLDEtMS4xMy01LjR2MGMwLS4yOCwwLS41MSwwLS43N0MuMSw5Ljk0LDcuMjUsMi41LDE2LDIuNWExNS40NSwxNS40NSwwLDAsMSw4LjkxLDIuODdBMTUuNDUsMTUuNDUsMCwwLDEsMzMuODYsMi41YzguNzksMCwxNS45NCw3LjQ0LDE1Ljk0LDE2LjU5LDAsLjI0LDAsLjQ3LDAsLjY5LDAsMCwwLC4wOSwwLC4xM2ExMy43OSwxMy43OSwwLDAsMS0xLDQuOTJxLS4xMy4zNS0uMjcuNzFoMGwtLjIzLjQ2Yy0uMTIuMjctLjI1LjU1LS40LjgzbC0uMTguMzRhMTEuNDksMTEuNDksMCwwLDEtLjYsMS4wN2MtLjI1LjQ0LS41OCwxLS45MywxLjVhNTUsNTUsMCwwLDEtNy41OSw4Ljg1Yy0yLjA3LDItNC4zOCw0LjA1LTYuODksNi4wOEMzMCw0Ni4xMiwyOSw0Ni45NCwyOC4zMSw0Ny4zNkE1LjY3LDUuNjcsMCwwLDEsMjQuOTIsNDguNVpNNDQuNzEsMjUuNDNsMCwwaDBsLjA2LS4xMWExNC44NywxNC44NywwLDAsMCwuNzItMS42NSwxMC40NCwxMC40NCwwLDAsMCwuNzYtMy43MXYtLjM1YzAtLjE1LDAtLjMsMC0uNDdDNDYuMywxMS44Nyw0MC43Miw2LDMzLjg2LDZhMTIsMTIsMCwwLDAtNy43NywyLjkxTDI1LDkuODhsLTEuMTQtMUExMiwxMiwwLDAsMCwxNiw2QzkuMTgsNiwzLjYsMTEuODcsMy42LDE5LjA5YTQuOTQsNC45NCwwLDAsMCwwLC41MnYuM2ExMS4yNywxMS4yNywwLDAsMCwuOTEsNC4xN2wuMDguMkEyMS4zNSwyMS4zNSwwLDAsMCw2LjQsMjcuNmE1MC4wNyw1MC4wNywwLDAsMCw3LjI3LDguNTNjMiwxLjkzLDQuMjMsMy45LDYuNjQsNS44NSwxLjA3Ljg2LDIuODgsMi4yNiwzLjI5LDIuNTdoMGEyLjE2LDIuMTYsMCwwLDAsMi42NCwwbC4yLjI1LS4xOC0uMjZjLjIxLS4xNSwyLjEtMS42MiwzLjI4LTIuNTdDMzIsNDAsMzQuMTksMzgsMzYuMTgsMzYuMDlhNTEuNTUsNTEuNTUsMCwwLDAsNy4xMS04LjI2cS40Ni0uNy44Ni0xLjM5YTguODUsOC44NSwwLDAsMCwuNDUtLjgybDAtLjA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0yLjUpIi8+PHBhdGggaWQ9IlJlY3RhbmdsZSIgZD0iTTE3LjUyLDE4LjU4aDBBMi41MiwyLjUyLDAsMCwxLDIwLDIxLjF2Mi41MmEyLjUyLDIuNTIsMCwwLDEtMi41MiwyLjUyaDBBMi41MiwyLjUyLDAsMCwxLDE1LDIzLjYxVjIxLjFBMi41MiwyLjUyLDAsMCwxLDE3LjUyLDE4LjU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMi41KSIvPjxwYXRoIGlkPSJSZWN0YW5nbGUtQ29weS02IiBkPSJNMzIuNTIsMTguNThoMEEyLjUyLDIuNTIsMCwwLDEsMzUsMjEuMXYyLjUyYTIuNTIsMi41MiwwLDAsMS0yLjUyLDIuNTJoMEEyLjUyLDIuNTIsMCwwLDEsMzAsMjMuNjFWMjEuMUEyLjUyLDIuNTIsMCwwLDEsMzIuNTIsMTguNThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0yLjUpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==');
    background-size: cover;
    height: 23px;
    width: 25px;
  }
}

.recommend_content {
  background: #fff;
  margin-top: 3px;
  width: 100%;

  .recommend_font {
    font-size: 0.15rem;
    font-weight: bolder;
    line-height: 0.21rem;
    padding: 20px 15px 10px;
    margin-top: 6px;
    font-family: PingFangSC-Semibold;
    display: flex;
    justify-content: space-between;
  }

  .vue-waterfall {
    width: calc(90% + 13px);
    position: relative;
    display: block;
    margin: 0 auto;
    // .vue-waterfall-slot
    // position: absolute;
    // margin: 0;
    // padding: 0;
    // box-sizing: border-box;
  }
}
</style>