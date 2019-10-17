<template>
  <div class="bigBox">
    <div class="base-container">
      <header>
        <Tou @showSearch="showSearch"></Tou>
      </header>
      <div class="content-container">
        <div>
          <!-- 轮播 -->
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="https://picb2b.qyer.com/FqpxXDlPWu3MqLTT_gPWP22cuwfa" alt />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://pic.qyer.com/public/lmapp/op_conf/2019/09/19/15688898077487?imageMogr2/thumbnail/!750x375r"
                alt
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://pic.qyer.com/public/lmapp/op_conf/2019/09/10/15680980762727?imageMogr2/thumbnail/!750x375r"
                alt
              />
            </swiper-slide>

            <!-- <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>-->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!-- 小图标 -->
          <div class="item-nav-wrapper">
            <ul>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-hotel" class="item-btn">
                  <router-link
                    to="hotel"
                    tag="i"
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/Fvv-TfNa_RKqKW0sTcp2BqwgVJNZ?imageslim);"
                  ></router-link>
                  <span>酒店</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-z" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(http://fes.qyerstatic.com/FmZQUj73tzL9QixhyTBUtpxbxBqt?imageslim);"
                  ></i>
                  <span>商城</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-biu" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/FkMxtgHBTCKsjaLBZ1B7xHGg08QT?imageslim);"
                  ></i>
                  <span>Biu</span>
                </a>
              </li>
              <li class="item" @click="goBuiban">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-play" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/Ft-_BNtwDwbLCwNbk8a6JKMx_OME?imageslim);"
                  ></i>
                  <span>约伴</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-ask" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/FsqBlRsF2hnYNrfR9YhCWQqD2j_P?imageslim);"
                  ></i>
                  <span>问答</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-guide" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim);"
                  ></i>
                  <span>锦囊</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-plan" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/Fgg0Tsbl5u7zvbNnmVhjDJd-3I-_?imageslim);"
                  ></i>
                  <span>行程助手</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-thread" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim);"
                  ></i>
                  <span>游记</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-place" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/Fgh5NStqSlSjuK7vtLSwOXg4RwNz?imageslim);"
                  ></i>
                  <span>目的地</span>
                </a>
              </li>
              <li class="item">
                <a href="javascript:void(0);" data-bn-ipg="mindex-nav-zhuanlan" class="item-btn">
                  <i
                    class="item-icon"
                    style="background:no-repeat center/100% url(//fes.qyerstatic.com/Fibzv7V9e1eoPD7XT4C0uC-hZIf7?imageslim);"
                  ></i>
                  <span>专栏</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 中间的显示  -->
          <div>
            <div class="ui-section-wrapper z-world-slide">
              <div class="ui-section-head">
                <span class="ui-section-title">主打折扣</span>
                <!---->
                <!---->
              </div>
              <div class="ui-section-body" id="smallImgList">
                <ul class="index-choiceProduct-list">
                  <li>
                    <a href="javascript:void(0);">
                      <div class="pic">
                        <img
                          width="100%"
                          data-src="https://pic.qyer.com/lastminute/library/2015/04/16/552f88726118b.jpg/300x200"
                          src="https://pic.qyer.com/lastminute/library/2015/04/16/552f88726118b.jpg/300x200"
                          lazy="loaded"
                        />
                      </div>
                      <p>（中秋/国庆）上海直飞东京/大阪/名古屋/福冈/冲绳/札幌/松山/富山/长崎/鹿儿岛/仙台4-14天往返含税机票（含行李托运）</p>
                      <p class="price">
                        <em>1799</em>元起
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div class="pic">
                        <img
                          width="100%"
                          data-src="https://pic.qyer.com/Fjtphm7IS-uTgQvtC_M7z6ywaktQ/300x200"
                          src="https://pic.qyer.com/Fjtphm7IS-uTgQvtC_M7z6ywaktQ/300x200"
                          lazy="loaded"
                        />
                      </div>
                      <p>上海直飞长滩岛5-7天往返含税机票(日落白沙滩+飞龙/宿务/吉祥航空直飞+可代订接送机/签证）</p>
                      <p class="price">
                        <em>899</em>元起
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div class="pic">
                        <img
                          width="100%"
                          data-src="https://pic.qyer.com/FjD7GKLEJgjecg33uK3RShUgIDjh/300x200"
                          src="https://pic.qyer.com/FjD7GKLEJgjecg33uK3RShUgIDjh/300x200"
                          lazy="loaded"
                        />
                      </div>
                      <shenglue
                        line="2"
                      >上海直飞日本鹿儿岛/长崎/仙台/广岛/松山/冈山/小松/富山/新泻3-15天往返含税机票（优质航空/超大行李额 回程时间可选）</shenglue>
                      <p class="price">
                        <em>1650</em>元起
                      </p>
                    </a>
                  </li>
                  <li class="read-more">
                    <a href="javascript:void(0);">
                      <span class="icon"></span>
                      <p class="text">
                        千款折扣
                        <br />查看更多
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ui-section-wrapper z-world-cate">
              <div class="ui-section-head">
                <span class="ui-section-title">精选玩乐</span>
                <!---->
                <!---->
              </div>
              <div class="ui-section-body">
                <ul class="index-subcategory-list">
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-1">
                      <img src="//fes.qyerstatic.com/FjhPw2CAsHhvxjAuUQvT0EjTfOTF?imageslim" />
                      <span>特价机票</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-2">
                      <img src="//fes.qyerstatic.com/Fh9eg1ZGwLp8GHrTbKSfjwMgUqz8?imageslim" />
                      <span>机酒自由行</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-3">
                      <img src="//fes.qyerstatic.com/FrnlnoQrQLokB6xx4mGmJhuz9eCf?imageslim" />
                      <span>当地玩乐</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-4">
                      <img src="//fes.qyerstatic.com/Fv-WDaw3GtUH1_8rcId7Bny4bwYV?imageslim" />
                      <span>门票/票券</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-5">
                      <img src="//fes.qyerstatic.com/FuFMfHPUrw-ms3echc2_SAd1EXoP?imageslim" />
                      <span>日本高铁</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-6">
                      <img src="//fes.qyerstatic.com/FgxEv9eVMgiTxXvVg4-h5GjE7muR?imageslim" />
                      <span>WiFi电话卡</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-7">
                      <img src="//fes.qyerstatic.com/Fu9r87vH7j46Gtafrd8ohKHQEoBm?imageslim" />
                      <span>欧铁频道</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-8">
                      <img src="//fes.qyerstatic.com/Fnf6W8mmlmHqGnzGvu-NnM_zK-1p?imageslim" />
                      <span>保险频道</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" data-bn-ipg="index-z-second-9">
                      <img src="//fes.qyerstatic.com/FnI5stm2aLT-icX075jIpjXIjKT4?imageslim" />
                      <span>接送机/包车</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 下面的数据 -->
            <div>
              <div class="ui-section-wrapper flow" data-v-32012948>
                <div class="ui-section-head">
                  <span class="ui-section-title">精选攻略</span>
                </div>
                <div class="ui-section-body" id="imgList" :style="`height:`+heightData+`px`">
                  <ImgList :imgList="infoList"></ImgList>
                  <!-- 一个数据 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="search">
      <div class="qui-popup-base" v-if="show">
        <div class="qui-popup-content">
          <section class="qui-search-wrapper">
            <div class="search-header">
              <div class="ipt-container">
                <i class="search-tubiao"></i>
                <form action="https://m.qyer.com/s.php">
                  <input
                    type="search"
                    name="wd"
                    id="search-input"
                    placeholder="搜索目的地、锦囊、游记攻略等"
                    class="search-ipt"
                    @input="handlerInput"
                    v-model="searchKey"
                  />
                </form>
                <i class="delete-ipt"></i>
              </div>
              <span class="cancel-search" @click="cancel">取消</span>
            </div>
            <div class="search-body">
              <!-- 还有一个搜索的显示 -->
              
              <component :is="currentTabComponent" :resultList="searchResult"></component>
              <!-- 还有一个搜索结果的显示 -->
            </div>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "styles/swiper.min.css";
import shenglue from "components/manyLineEclipsis";
import ImgList from "components/ImgList";
import BScroll from "better-scroll";
import getData from "utils/getData";
import Tou from "components/Header";
import search from "utils/search"
import SearchInit from "components/search/SearchInit"
import SearchResult from "components/search/SearchResult"

export default {
  data() {
    return {
      show: false,
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
        loop: true
      },
      infoList: [],
      page: 2,
      searchKey:"",
      currentTabComponent:"SearchInit",
      searchResult:[]
      // bb:""
    };
  },
  components: {
    swiper,
    swiperSlide,
    shenglue,
    ImgList,
    Tou,
    SearchInit,
    SearchResult
  },
  async created() {
    let result = await getData.post(
      "/biu_list?ajaxID=5cd8d69ef1d508c32233475c",
      1
    );
    this.infoList = result;
  },
  mounted() {
    let bScroll = new BScroll(".content-container", {
      pullUpLoad: {
        threshold: 50
      },
      eventPassthrough: "horizontal",
      click: true
    });
    bScroll.on("pullingUp", async () => {
      // console.log(1)
      let result = await getData.post(
        "/biu_list?ajaxID=5cd8d69ef1d508c32233475c",
        this.page
      );
      // console.log(this.infoList)
      this.infoList.push(...result);
      // console.log(this.infoList)
      this.$nextTick(() => {
        bScroll.refresh();
        this.page++;
        bScroll.finishPullUp();
      });
    });
    // this.bb = bScroll
  },
  //这个computed可以检测到变化
  computed: {
    heightData() {
      return Math.max.apply(false, this.$store.state.heightArr) + 60;
    }
  },
  methods:{
    cancel(){
      this.show = false
    },
    showSearch(){
      this.show = true
    },
    goBuiban(){
      this.$router.push("/buiban")
    },
    async handlerInput(){
      if(this.searchKey.trim()!==""){
        let result = await search.get("http://localhost:8080/ajaxsearch?","action=ajaxsearch&wd="+this.searchKey+"&popsearch=1")
        // console.log(result)
        this.currentTabComponent = "SearchResult"
        this.searchResult = result
      }else{
        this.currentTabComponent = "SearchInit"
      }
    }
  }
};
</script>

<style lang='stylus' scoped>

.search-enter-active {
  transition: all .3s ease;
}
.search-leave-active {
  transition: all .3s ease;
}
.search-enter, .search-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}

body, html {
  height: 100%;
  touch-action: none;

  header {
    height: 0.44rem;
  }
}
.bigBox{
  height 100%
}
.base-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-container {
    // overflow hidden
    height: 100%;
    // float：left;
    // display:inline-block
    // overflow-y: scroll;
    // margin-top .3rem
    flex: 1;
  }
}

.swiper-container {
  position: relative;
  height: 1.8rem;

  .swiper-wrapper {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.item-nav-wrapper {
  margin-top: 0.125rem;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 0.05rem;
      width: 20%;

      a {
        display: block;
        position: relative;
        color: #8dabbb;

        i {
          display: block;
          width: 100%;
          padding-bottom: 100%;
        }

        span {
          display: block;
          width: 100%;
          font-size: 0.13rem;
          margin-top: -7px;
          text-align: center;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 500;
        }
      }
    }
  }
}

.ui-section-wrapper {
  margin-top: 0.3rem;

  .ui-section-head {
    position: relative;
    height: 0.3rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    text-align: left;
    color: #000;
    padding-left: 0.15rem;
    padding-bottom: 0.4rem;
    font-weight: 700;
  }

  #smallImgList {
    overflow-x: scroll;

    .index-choiceProduct-list {
      width: 6rem;
      padding: 0 0.15rem;
      overflow-y: hidden;
      // overflow-x: sroll;
      white-space: nowrap;
      display: flex;

      >li {
        // flex-shrink 0
        flex: 1 0 auto;
        width: 1.62rem;
        height: 1.98rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.08rem;
        background: #fff;
        margin-right: 0.09rem;
        overflow: hidden;

        a {
          p {
            height: 0.38rem;
            overflow: hidden;
            margin-top: 0.08rem;
            font-size: 0.15rem;
            line-height: 0.19rem;
            color: #1f2023;
            width: 100%;
            padding: 0 0.1rem;
            white-space: normal;
            // display: -webkit-box;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 600;
          }

          p.price {
            margin-top: 0.06rem;
            font-size: 0.13rem;
            line-height: 0.18rem;
            height: 0.18rem;
            color: rgba(31, 32, 35, 0.4);

            em {
              font-size: 0.15rem;
              color: #ff7467;
              font-family: special;
            }
          }
        }

        &.read-more {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          vertical-align: top;
          margin-left: 0.1rem;
          width: 1.15rem;
          height: 1.98rem;
          border: none;
          text-align: center;
        }
      }
    }
  }

  .ui-section-body {
    .index-subcategory-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.15rem;

      li {
        flex: 0 0 33.33%;
        width: 33.33%;
        height: 0.5rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        a {
          display: block;
          position: relative;
          width: 1.09rem;
          height: 0.4rem;
          padding: 0.07rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border-radius: 0.06rem;
          font-size: 0.14rem;
          line-height: 0.28rem;
          color: rgba(0, 0, 0, 0.8);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #00afc7;

          img {
            width: 0.3rem;
            height: 0.25rem;
            position: absolute;
            right: 0.06rem;
            bottom: 0;
            display: block;
          }

          span {
            vertical-align: middle;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
  }
}

.qui-popup-base 
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #fff;
  .qui-popup-content
    width: 100%;
    height: 100%;
    .qui-search-wrapper
      position: relative;
      width: 100%;
      height: 100%;
      padding-bottom: .1rem;
      overflow: scroll;
      .search-header
        padding: .07rem .15rem;
        width: 100%;
        height: .44rem;
        line-height: .3rem;
        background-color: #fff;
        position: fixed;
        z-index: 999;
        display: flex;
        flex: 1;
        justify-content: space-between;
        font-size: 0;
        .ipt-container
          display: flex;
          flex: 1;
          padding-right: .1rem;
          justify-content: space-between;
          align-items: center;
          height: .3rem;
          line-height: .3rem;
          border-radius: .15rem;
          background: #eee;
          overflow: hidden;
          position: relative;  
          .search-tubiao
            display: inline-block;
            vertical-align: middle;
            flex: 0 1 0.12rem;
            width: .12rem;
            height: .12rem;  
            background: no-repeat 50%/100% url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfc2VhcmNoPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMy42MjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjgiPjxjaXJjbGUgY3g9IjguNzYiIGN5PSI4Ljc2IiByPSI4Ljc2Ii8+PHBhdGggZD0iTTE1LjUgMTUuNWw3LjY2NyA3LjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')
            margin-left: .125rem;
            margin-right: .12rem;
          form
            display: inline-block;
            vertical-align: middle;
            flex: 1;
          .search-ipt
            display: inline-block;
            vertical-align: middle;
            border: none;
            background: transparent;
            font-size: .14rem;
            color: #000;
            width: 100%;
        .cancel-search 
          display: inline-block;
          color: #000;
          font-size: .14rem;
          flex: 0 1 0.35rem;
          width: .3rem;
          padding-left: .05rem;

      .search-body
        padding: .44rem .15rem .5rem;
        
</style>