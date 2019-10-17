<template>
  <div>
    <div class="search-wrap search-wrap-fixed">
      <div class="search-input-wrap">
        <i class="magnifying-glass"></i>
        <input type="text" placeholder="想去哪里?" value class="input" v-model="city" />
        <button class="confirm" @click="back">取消</button>
      </div>
      <div class="search-other">
        <div class="hot-city">
          <div class="type">海外酒店</div>
          <div class="list">
            <span @click="pickWaiCity('曼谷')">曼谷</span>
            <span @click="pickWaiCity('洛杉矶')">洛杉矶</span>
            <span @click="pickWaiCity('纽约')">纽约</span>
            <span @click="pickWaiCity('旧金山')">旧金山</span>
            <span @click="pickWaiCity('东京')">东京</span>
            <span @click="pickWaiCity('大阪')">大阪</span>
          </div>
        </div>
        <div class="search-result" :style="'display:'+isShow">
          <div
            class="item"
            v-for="item in itemList"
            :key="item.city_id"
            @click="pickWaiCity(item.v)"
          >{{item.v+","}}{{item.country_cn}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchCity from "utils/search.js";
export default {
  data() {
    return {
      city: "",
      itemList: [],
      isShow: "none"
    };
  },
  methods: {
    back() {
      this.$router.push("/hotel");
    },
    pickWaiCity(city){
        localStorage.setItem("waiCity",city)
        this.$router.push("/hotel")
    }
  },
  watch: {
    async city(key) {
        if (key.trim() !== "") {
            this.isShow="block"
            let result = await searchCity.get("http://localhost:8080/search?", "type=1&keyword="+key);
            this.itemList=result
        // console.log(result);
      }else{
            this.itemList=[]
            this.isShow="none"
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
.search-wrap-fixed {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #333;
  background: #fff;

  .search-input-wrap {
    position: relative;
    padding: 0 0 0 0.1rem;
    height: 0.44rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 0.05rem;
    color: rgba(0, 0, 0, 0.2);
    background: #fff;

    .magnifying-glass {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      width: 0.14rem;
      height: 0.14rem;
      padding: 0 0 0 0 !important;
      background: no-repeat 50% / 100% url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfc2VhcmNoPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMy42MjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjgiPjxjaXJjbGUgY3g9IjguNzYiIGN5PSI4Ljc2IiByPSI4Ljc2Ii8+PHBhdGggZD0iTTE1LjUgMTUuNWw3LjY2NyA3LjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==');
      left: 0.23rem;
    }

    .input {
      padding: 0 0.12rem 0 0.33rem;
      background: #eee;
      border-radius: 0.3rem;
      flex: 1;
      border: 0;
      height: 0.3rem;
      line-height: 0.3rem;
      color: rgba(0, 0, 0, 0.4);

      &::placeholder {
        font-size: 0.15rem;
      }
    }

    .confirm {
      height: 100%;
      padding: 0 0.11rem;
      border: 0;
      background-color: transparent;
      color: #000;
      font-size: 0.14rem;
      font-weight: 500;
    }
  }

  .search-other {
    position: relative;
    display: block;

    .hot-city {
      padding: 0.15rem;

      .type {
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.4);
      }

      .list {
        margin-top: 0.2rem;
        width: calc(100% + 0.1rem);

        span {
          display: inline-block;
          margin-right: 0.1rem;
          margin-bottom: 0.1rem;
          padding: 0 0.15rem;
          font-size: 0.13rem;
          background: rgba(0, 0, 0, 0.07);
          vertical-align: top;
          line-height: 0.25rem;
          border-radius: 0.25rem;
        }
      }
    }

    .search-result {
      box-sizing: border-box;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100vh - 0.44rem);
      padding: 0 0.15rem;
      background: #fff;

      .item {
        padding: 0.1rem 0;
        font-size: 0.14rem;
      }
    }
  }
}
</style>
