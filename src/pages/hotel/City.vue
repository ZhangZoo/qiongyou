<template>
  <div>
     <section id="city-list" class="city-list-container" style="display: block;">
    <div>
      <!-- <section>
        <div ref="locate" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section> -->

      <section class="history-city-list"></section>

      <section>
        <div ref="hot" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item"
            v-for="hotcity in hotcities.slice(0, 10)"
            :key="hotcity.id"
            @click="pickCity(hotcity)"
          >{{hotcity.nm}}</div>
        </div>
      </section>

      <section
        v-for="(item, key) in cities"
        :key="key"
      >
        <div :ref="key" class="city-title city-title-letter">{{key}}</div>
        <div class="city-list city-list-block clearfix">
          <div class="city-item"
            v-for="city in item"
            :key="city.id"
            @click="pickCity(city)"
          >{{city.nm}}</div>
        </div>
      </section>

    </div>
  </section>
  <section class="nav">
    <!-- <div class="nav-item"
      @click="scrollToElement('locate')"
    >定位</div> -->
    <div class="nav-item"
      @click="scrollToElement('hot')"
      ref="navhot"
    >热门</div>
    <div class="nav-letter nav-item"
      v-for="(city, key) in cities"
      :key="key"
      @click="scrollToElement(key)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</div>
  </section>
  </div>
</template>

<script>
import getCity from "utils/getCity.js"
import _ from "lodash"
import BScroll from "better-scroll"
export default {
    data(){
        return{
            cities: {},
            hotcities: []
        }
    },
    async created(){
        let result = await getCity.get()
        this.hotcities = result
        let cities = _.groupBy(result,(val)=>{
            return val.py.substring(0,1).toUpperCase()
        })
        // console.log(cities)
        var keys = Object.keys(cities).sort()
        //将无序的对象根据key进行排序
        let newCities = keys.reduce((obj,key)=>{
            obj[key] = cities[key]
            return obj;
        },{})
        // console.log(newCities)
        this.cities = newCities
        this.letterArray = Object.keys(this.cities)
        this.size = this.letterArray.length
    },
    methods: {
    pickCity({id, nm}) {
        //将选择的城市放到vuex中
    //   this.$store.dispatch('changeCity', {
    //     id,
    //     nm
    //   })
    //将城市放到本地的localstorage中
      localStorage.setItem("city",nm)
      this.$router.push('/hotel')
    },

    scrollToElement(key) {
      this.bScroll.scrollToElement(this.$refs[key][0] || this.$refs[key])
    },

    handleTouchStart() {
      // console.log('start')
    },


    // 移动的时候 throttle节流   debounce防抖
    handleTouchMove: _.throttle(function(e) {
        //获取到当前触碰的元素距离顶部的距离
      let clientY = e.touches[0].clientY
      //计算他到热门的高度
      let pos = clientY - this.navHotPos - 35
      //根据距离除以每一个字母的高度
      let index = Math.ceil(pos/this.letterHeight)
      
        //如果索引不大于这些字母的个数兵器索引大于0
      if (index < this.size && index >= 0) {
        //获取到当前的字母
        let letter = this.letterArray[index]
        //跳到指定的元素
        this.bScroll.scrollToElement(this.$refs[letter][0])
      }
    }, 100),

    handleTouchEnd() {
      // console.log('end')
    }
  },
  mounted() {
    this.bScroll = new BScroll('#city-list', {
      click: true
    })
    //在这里获取一次热门的高度
    this.navHotPos = this.$refs['navhot'].getBoundingClientRect().top
    this.letterHeight = this.$refs['navhot'].offsetHeight
  },
}
</script>

<style lang='stylus' scoped>
#city-list
  padding-right .2rem
.nav
  z-index 10000
// .city-list-container
//     background-color: #ebebeb;
//     font-size: 14px;
//     color: #333;
//     top: 0;
//     bottom: 0;
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     z-index: 1000;
//     overflow-y: auto;
//     .city-title 
//         padding-left: 15px;
//         line-height: 30px;
//         .city-list-inline
//             background-color: #f5f5f5;
//             padding-bottom: 8px;
//             .city-item
//                 float: left;
//                 background: #fff;
//                 width: 29%;
//                 height: 33px;
//                 margin-top: 15px;
//                 margin-left: 4%;
//                 padding: 0 4px;
//                 border: 1px solid #e6e6e6;
//                 border-radius: 3px;
//                 line-height: 33px;
//                 text-align: center;
//                 box-sizing: border-box;
//                 white-space: nowrap;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//             .location-city
//                 width: auto;
//                 min-width: 30%;
//                 padding: 0 20px;
//                 float: left;
//                 background: #fff;
//                 height: 33px;
//                 margin-top: 15px;
//                 margin-left: 4%;
//                 border: 1px solid #e6e6e6;
//                 border-radius: 3px;
//                 line-height: 33px;
//                 text-align: center;
//                 box-sizing: border-box;
//                 white-space: nowrap;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//         .city-list 
//             padding-right: 30px;


</style>