<template>
  <div class="bbb">
    <div class="guding">
      <header class="header" data-v-4d98d8d2>
        <div data-bn-ipg="m_biuban_backhome" class="header__lf" data-v-4d98d8d2 @click="goIndex"></div>
        <div class="header__center biufont biufont_biuban" data-v-4d98d8d2>
          Bui!
          <i>伴</i>
        </div>
        <div
          data-bn-ipg="m_biuban_filter_default"
          class="header__ri"
          data-v-4d98d8d2
          @click="reset"
        >重置</div>
      </header>
      <section class="conditionbox" data-v-394741aa>
        <div data-bn-ipg="m_biuban_filter_add" data-v-394741aa class @click="showCity">
          <span data-v-394741aa v-if="!searchcity">
            地点
            <i class="yo-ico biufont biufont_Triangle" data-v-394741aa>&#xf033;</i>
          </span>
          <span v-if="searchcity" style="color: #ff3e6a">{{searchcity}}</span>
        </div>
        <div data-bn-ipg="m_biuban_filter_topic" data-v-394741aa class @click="showTopic">
          <span data-v-394741aa v-if="!tp">
            主题
            <i class="yo-ico biufont biufont_Triangle" data-v-394741aa>&#xf033;</i>
          </span>
          <span v-if="tp" style="color: #ff3e6a">{{tp}}</span>
        </div>
        <div data-bn-ipg="m_biuban_filter_time" data-v-394741aa class>
          <span data-v-394741aa>
            时间
            <i class="yo-ico biufont biufont_Triangle" data-v-394741aa>&#xf033;</i>
          </span>
        </div>
        <transition name="searchCity">
          <section data-v-4432b21a data-v-394741aa class="bb_place" v-if="isShow">
            <div data-v-4432b21a class="bb_place__search">
              <section data-v-4432b21a>
                <i class="search-icon"></i>
                <input
                  data-v-4432b21a
                  type="text"
                  placeholder="搜索地点"
                  data-bn-ipg="m_biuban_filter_add_search"
                />
                <!---->
              </section>
              <span data-v-4432b21a data-bn-ipg="m_biuban_filter_add_cancel" @click="goBack">取消</span>
            </div>
            <section data-v-4432b21a class="bb_place__box">
              <!---->
              <div data-v-4432b21a class="bb_place__hot">
                <!---->
                <h3 data-v-4432b21a>热门地点</h3>
                <ul data-v-4432b21a>
                  <li
                    data-v-4432b21a
                    data-bn-ipg="m_biuban_filter_add_selected"
                    v-for="city in hotplace"
                    :key="city.id"
                    @click="pickCity(city.name,city.id)"
                  >
                    <section data-v-4432b21a>
                      <div
                        class="cover"
                        lazy="loaded"
                        :style="`background-image: url(${city.cover});`"
                      ></div>
                      <div data-v-4432b21a class="text" :id="city.id">{{city.involve}}</div>
                    </section>
                    <h4 data-v-4432b21a>{{city.name}}</h4>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </transition>
        <transition name="searchTopic">
        <section data-v-71424d32 data-v-394741aa class="filter_box" v-if="isTopicShow">
          <ul data-v-71424d32>
            <li
              data-v-71424d32
              class="selected"
              v-for="item in topic"
              :key="item.id"
              @click="pickTopic(item)"
            >{{item.name}}</li>
          </ul>
        </section>
        </transition>
        <!---->
        <!---->
        <!---->
      </section>
    </div>
    <section class="contentBox">
      <ul class="card" data-v-2cffcf5e style="margin-bottom:100px">
        <JieBan
          v-for="(imgInfo,index) in imgList"
          :key="imgInfo.id"
          :imgInfo="imgInfo"
          :index="index"
          :lineNum="lineNum"
        ></JieBan>
        <section class="loading_box" data-v-3f2e4af1 data-v-2cffcf5e>
          <div data-v-3f2e4af1 class="loading_list">
            <img data-v-3f2e4af1 src="//fes.qyerstatic.com/FhPjAL1TFuX-ZwSUTyOThSkjAz12?imageslim" />
          </div>
        </section>
      </ul>
    </section>
  </div>
</template>

<script>
import JieBan from "components/imgItem/JieBan.vue";
import getList from "utils/getFriend.js";
import search from "utils/search.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      page: 2,
      imgList: [],
      lineNum: 0,
      hotplace: [],
      dateslice: [],
      topic: [],
      isShow: false,
      isTopicShow: false,
      searchcity: localStorage.getItem("searchcity"),
      cityId: null,
      tp: localStorage.getItem("tp")
    };
  },
  components: {
    JieBan
  },
  created() {
    this.getData(this.page);
  },
  methods: {
    async getData(page) {
      let result = await getList.get("http://localhost:8080/buiban", 1);
      this.imgList = result.data.list;
      this.hotplace = result.data.filters.hot_place;
      this.dateslice = result.data.filters.dateslice;
      this.topic = result.data.filters.hot_topic;
      console.log(result);
    },
    goIndex() {
      this.$router.push("/index");
    },
    goBack() {
      this.isShow = false;
    },
    showCity() {
      this.isShow = true;
    },
    showTopic() {
      this.isTopicShow = true;
    },
    async pickTopic(topic) {
      this.isTopicShow = false;
      this.tp = topic.name;
      localStorage.setItem("tp", topic.name);
      this.imgList = [];
      let cityId = localStorage.getItem("searchcity")
      if (cityId) {
        let result = await search.get(
          "http://localhost:8080/buiban?",
          "place=" + this.cityId + "&topic=" + topic.id
        );
        this.imgList = result.list;
      } else {
        let result = await search.get(
          "http://localhost:8080/buiban?",
          "topic=" + topic.id
        );
        this.imgList = result.list;
      }
    },
    async pickCity(name, id) {
      this.isShow = false;
      localStorage.setItem("searchcity", name);
      this.searchcity = localStorage.getItem("searchcity");
      this.imgList = [];
      this.cityId = id;
      let result = await search.get(
        "http://localhost:8080/buiban?",
        "place=" + id
      );
      this.imgList = result.list;
    },
    async reset() {
      this.searchcity = null;
      this.tp = null;
      localStorage.clear();
      this.imgList = []
      let result = await getList.get("http://localhost:8080/buiban", 1);
      this.imgList = result.data.list;
    }
  },

  mounted() {
    let bScroll = new BScroll(".contentBox", {
      pullUpLoad: {
        threshold: 50
      },
      eventPassthrough: "horizontal",
      click: true
    });
    bScroll.on("pullingUp", async () => {
      // console.log(1)

      let result = await getList.get("http://localhost:8080/buiban", this.page);
      result = result.data.list;
      // console.log(this.infoList)
      this.imgList.push(...result);
      // console.log(this.infoList)
      this.$nextTick(() => {
        bScroll.refresh();
        this.page++;
        bScroll.finishPullUp();
      });
    });
  },

  computed: {}
};
</script>

<style lang='stylus' scoped>
@import '~styles/border.styl';

.bbb {
  height: 100%;

  .contentBox {
    height: 100%;
  }
}

.guding {
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
}

.header {
  height: 0.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;

  .header__lf {
    background: url('https://fes.qyerstatic.com/Fm4HsBIkKgTXE2ouOZ-lK6CuDiVX?imageslim=') no-repeat 50%;
    background-size: 0.65rem auto;
    width: 0.9rem;
    height: 0.5rem;
  }

  .header__center {
    line-height: 0.5rem;
    width: 1rem;
    font-size: 0.2rem;
    font-weight: 700;
    // margin-left: -.5rem;
    text-align: center;
    color: black;
  }

  .header__ri {
    border: 0.01rem solid #000;
    border-radius: 0.25rem;
    font-size: 0.13rem;
    line-height: 0.25rem;
    height: 0.25rem;
    margin-top: 0.12rem;
    padding: 0 0.12rem;
  }
}

.conditionbox {
  margin-top: 0.5rem;
  height: 0.44rem;
  margin-bottom: 0.14rem;
  text-align: center;
  font-weight: 600;
  line-height: 0.44rem;
  border1px(0 0 1px 0);
  // border-bottom: .01rem solid #d8d8d8;
  justify-content: space-around;
  font-size: 0;
  width: 100%;
  display: flex;

  >div {
    flex: 1;
    height: 0.44rem;
    width: 1.25rem;
    display: inline-block;
    font-size: 0;

    >span {
      max-width: 1rem;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.17rem;

      .biufont_Triangle {
        font-size: 0.15rem;
      }
    }
  }
}

.contentBox {
  margin-top: 1rem;
}

.card {
  width: 100%;
  padding: 0.18rem;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.loading_box {
  width: 100%;
}

.loading_list {
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 1.2rem;
  }
}

.bb_place {
  left: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: left;
  z-index: 200;
}

.bb_place__search {
  line-height: 0.3rem;
  position: relative;
  margin: 0.15rem;
  height: 0.3rem;
  font-size: 0.14rem;
  box-sizing: border-box;

  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0.4rem;
    border-radius: 0.3rem;
    background: rgba(0, 0, 0, 0.1);

    i {
      margin-left: 0.1rem;
      display: inline-block;
      vertical-align: middle;
      width: 0.12rem;
      height: 0.12rem;
      padding: 0 0 0 0 !important;
      background: no-repeat 50% / 100% url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfc2VhcmNoPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMy42MjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjgiPjxjaXJjbGUgY3g9IjguNzYiIGN5PSI4Ljc2IiByPSI4Ljc2Ii8+PHBhdGggZD0iTTE1LjUgMTUuNWw3LjY2NyA3LjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==');
    }

    input {
      position: absolute;
      border: 0;
      margin: 0;
      left: 0;
      top: 0;
      background: transparent;
      width: 100%;
      height: 100%;
      font-size: 0.14rem;
      box-sizing: border-box;
      padding: 0 0.25rem 0 0.3rem;
    }
  }

  >span {
    position: absolute;
    top: 0;
    right: 0;
    width: 0.4rem;
    text-align: center;
    cursor: pointer;
  }
}

.bb_place__box {
  position: absolute;
  top: 0.6rem;
  bottom: 0;
  right: 0;
  padding: 0 0.15rem;
  overflow-y: auto;

  .bb_place__hot {
    >h3 {
      font-size: 0.14rem;
      line-height: 0.3rem;
      opacity: 0.4;
      // border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);
      margin-bottom: 0.2rem;
    }

    >ul {
      display: flex;
      flex-wrap: wrap;

      >li {
        text-align: center;
        width: 25%;
        margin-bottom: 0.3rem;

        section {
          width: 0.64rem;
          height: 0.64rem;
          position: relative;
          margin: auto;

          div.cover {
            position: absolute;
            left: 0;
            top: 0;
            width: 0.64rem;
            height: 0.64rem;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
          }

          div.bg {
            opacity: 0.8;
            position: absolute;
            left: 0;
            top: 0;
            width: 0.64rem;
            height: 0.64rem;
            border-radius: 100%;
          }

          div.text {
            position: absolute;
            line-height: 0.69rem;
            left: 0;
            top: 0;
            right: 0;
            text-align: center;
            font-family: special;
            color: #fff;
            font-size: 0.2rem;
          }
        }

        h4 {
          font-size: 0.14rem;
          padding-top: 0.05rem;
          line-height: 0.3rem;
        }
      }
    }
  }
}

.searchCity-enter-active {
  transition: all 0.3s ease;
}

.searchCity-leave-active {
  transition: all 0.3s ease;
}

.searchCity-enter, .search-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
.searchTopic-enter-active {
  transition: all 0.3s ease;
}

.searchTopic-leave-active {
  transition: all 0.3s ease;
}

.searchTopic-enter, .search-leave-to {
  transform: translateY(100vw);
  opacity: 0;
}

.filter_box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.88rem;
  background: hsla(0, 0%, 100%, 0.9);
  height: 8.5rem;
  overflow: hidden;
  z-index: 200;

  ul {
    padding: 0.1rem 0;
    height: 100%;
    overflow-y: scroll;

    li {
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 600;
    }
  }
}
</style>
