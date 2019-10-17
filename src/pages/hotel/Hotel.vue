<template>
  <div class="containerBox">
    <!-- 头部 -->
    <div class="header">
      <span class="back">
        <em class="icon-back" @click="this.handlerBack"></em>
      </span>
      <span>酒店频道</span>
      <span class="opt"></span>
    </div>
    <!--  -->
    <section :class="'head-search '+(isCurrent==='wai'?'style-1':'style-2')">
      <h1 class="title">
        旅途可以
        <br />多一种可能。
      </h1>
      <div class="tabs">
        <span :class="'tab '+(isCurrent==='wai'?'current':'') "  @click="()=>{this.changeBar('wai')}">海外酒店</span>
        <span :class="'tab '+(isCurrent==='nei'?'current':'') "  @click="()=>{this.changeBar('nei')}">国内酒店</span>
      </div>
      <div class="search-form">
        <div class="search-wrap">
          <div class="search-input-wrap">
            <input type="text" placeholder="想去哪里?" v-model="showCity"  class="input" @click="this.pickCity"/>
          </div>
        </div>
        <div class="date-calendar">
          <input placeholder="入住日期 - 离店时间"  @click="showdateDouble = true" v-model="showDouble"/>
        </div>
        <!-- 选择时间的组件 -->
        <date :showCalendar.sync='showdateDouble' maxDate="12m" :options="dateOptionsDouble" @changeDate="changeDateDouble"></date>
        <div class="button-control">
          <button data-bn-ipg="h5-hotel-homepage-searchbutton" class="search-btn">
            <em class="icon-search"></em>
            <span>搜索酒店</span>
          </button>
        </div>
      </div>
      <div class="tips">
        <span>房价最低·⽴即确认·免费取消·中⽂服务</span>
        <span class="icon-tips"></span>
      </div>
    </section>
    <!-- 精选住宿 -->
    <section class="tab-hotel">
      <h2 class="head">精选住宿</h2>
      <div class="tabs">
        <span data-bn-ipg class="tab" v-for="title in titleList" :key="title.id" :class="(currentTitle===title.id?'current':'')" @click="changeTitle(title.id)">{{title.title}}</span>
        <!-- <span data-bn-ipg class="tab" :class="(title==='旧金山'?'current':'')">旧金山</span>
        <span data-bn-ipg class="tab" :class="(title==='东京'?'current':'')">东京</span>
        <span data-bn-ipg="h5-hotel-homepage-chosencity_1" class="tab" :class="(title==='香港'?'current':'')">香港</span>
        <span data-bn-ipg="h5-hotel-homepage-chosencity_2" class="tab" :class="(title==='北京'?'current':'')">北京</span> -->
      </div>
      <div class="container">
        <div class="cont-grid">
          <div class="summary">
            <div class="summary-grid" v-if="hotelInfo!=='undefined'">
              <div class="title">
                <span class="global">{{hotelInfo.city}}区域平均数据</span>
              </div>
              <span class="row">
                <span class="hd">
                  <em>{{hotelInfo?hotelInfo.average.cost:""}}</em>元
                </span>
                <span class="fd">价格</span>
              </span>
              <span class="row">
                <span class="hd">
                  <em>{{hotelInfo.average.grade}}</em>
                </span>
                <span class="fd">星级</span>
              </span>
              <span class="row">
                <span class="hd">
                  <em>{{hotelInfo.average.score}}</em>
                </span>
                <span class="fd">评分</span>
              </span>
            </div>
            <div class="summary-grid">
              <div class="title">
                <span class="qyer">穷游用户主流数据</span>
              </div>
              <span class="row">
                <span class="hd gr">
                  <em>{{hotelInfo?hotelInfo.qyer.cost:""}}</em>元
                </span>
                <span class="fd">价格</span>
              </span>
              <span class="row">
                <span class="hd gr">
                  <em>{{hotelInfo.qyer.grade}}</em>
                </span>
                <span class="fd">星级</span>
              </span>
              <span class="row">
                <span class="hd gr">
                  <em>{{hotelInfo.qyer.score}}</em>
                </span>
                <span class="fd">评分</span>
              </span>
            </div>
          </div>
          <div class="cell">
            <h3 class="hotel-title">一城一宿</h3>
            <div class="hotel-list">
              <div class="hotel-card item" v-for ="item in hotelList" :key="item.id">
                <a
                  href=""
                  class="wrap"
                >
                  <div class="pic">
                    <img
                      :src="item.pic"
                      lazy="loaded"
                    />
                  </div>
                  <div class="caption">
                    <div class="name">{{item.cn_name}}</div>
                    <div class="grade-wrap">
                      <span class="star" v-for="(star,index) in item.star" :key='index'></span>
                      <span class="gap"></span>
                      <span class="grade">{{item.grade}}分</span>
                    </div>
                    <div class="price">
                      <em>{{item.price}}</em>
                      <span>元起/晚</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
             <h3 class="hotel-title">奢想假日</h3>
            <div class="hotel-list">
              <div class="hotel-card item" v-for ="item in vipHotelList" :key="item.id">
                <a
                 
                  href="http://hotel.qyer.com/jump.php?track_key=h5-hotel-homepage-1city1hotel&amp;hotel_id=246822&amp;hotel_name=%E4%BD%A0%E5%A5%BD%E7%BA%BD%E7%BA%A6%E6%97%85%E8%88%8D"
                  target="_blank"
                  data-bn-ipg
                  class="wrap"
                >
                  <div class="pic">
                    <img
                     :src="item.pic"
                      lazy="loaded"
                    />
                  </div>
                  <div class="caption">
                    <div class="name">{{item.cn_name}}</div>
                    <div class="grade-wrap">
                      <span class="star" v-for="(star,index) in item.star" :key="index"></span>
                      <span class="gap"></span>
                      <span class="grade">{{item.grade}}分</span>
                    </div>
                    <div class="price">
                      <em>{{item.price}}</em>
                      <span>元起/晚</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="hotel-more">
            <a
             
              href="//hotel.qyer.com/new-york/"
              target="_blank"
              data-bn-ipg
            >查看更多住宿</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Tou from "components/Header";
import getHotel from "utils/getHotel"
import date from "./Date";
// import FastClick from 'fastclick'
// FastClick.attach(document.body);

// console.log(str)
export default {

  data(){
    return{
      currentTitle:69,
      hotelList:[],
      hotelInfo: {city: "纽约", average: {cost: 1113, grade: 3.4, score: 8.2}, qyer: {cost: 924, grade: 3.7, score: 8.5}},
      vipHotelList:[],
      titleList:[
        {id: 69,title:"纽约"},{id: 81,title:"旧金山"},{id: 63,title:"东京"},{id: 50,title:"香港"},{id:11593,title:"北京"}
      ],
      showdateDouble: false,
      double: "",
      startDouble: "",
      endDouble: "",
      dateOptionsDouble: {
        start: "",
        maxDate: "12m", // 月份跨度
        isDoubleCheck: true,
      },
    }
  },
  created(){
    this.getHotel();
    let year = new Date().getUTCFullYear();
    let m = new Date().getMonth()+1
    let d = new Date().getDate();
    // console.log(year,m,d)
    let str = year+"-"+m+"-"+d
    this.dateOptionsDouble.start=str
  },
  components: {
    date
  },
  methods:{
    handlerBack(){
      this.$router.push("/index");
    },
    pickCity(){
      if(this.isCurrent==="wai"){
        this.$router.push("/waiCity")
      }else{
        this.$router.push("/city")
      }
    },
    pickDate(){
      this.$router.push("/pickDate")
    },
    changeDateDouble(start, end) {
      this.startDouble = start;
      this.endDouble = end;
    },
    formatDate(timestamp, formats) {
      formats = formats || "Y-M-D";
      var myDate = timestamp ? new Date(timestamp) : new Date();
      var year = myDate.getFullYear();
      var month = formatDigit(myDate.getMonth() + 1);
      var day = formatDigit(myDate.getDate());
      var hour = formatDigit(myDate.getHours());
      var minute = formatDigit(myDate.getMinutes());
      var second = formatDigit(myDate.getSeconds());
      return formats.replace(/Y|M|D|h|m|s/g, function(matches) {
        return {
          Y: year,
          M: month,
          D: day,
          h: hour,
          m: minute,
          s: second
        }[matches];
      });
      // 小于10补0
      function formatDigit(n) {
        return n.toString().replace(/^(\d)$/, "0$1");
      }
    },
    changeBar(type){
      this.$store.commit("changeBar",type)
      this.startDouble = ""
      this.endDouble = ""
   },
   changeTitle(titleid){
     this.currentTitle = titleid
   },
   async getHotel(){
      let result = await getHotel.get(`http://localhost:8080/list?city_id=${this.currentTitle}`)
      this.hotelInfo=result.data.summary
      this.hotelList = result.data.list.slice(0,4)
      this.vipHotelList = result.data.list.slice(4)
   }
  },
  computed:{
    //显示日期的计算属性
    showDouble() {
      if(this.startDouble && this.endDouble){
        return this.startDouble + "至" + this.endDouble;
      }else if (this.startDouble && !this.endDouble){
        return this.startDouble
      }
      else{
        // localStorage.setItem("date","");
        return ''
      }
    },
    isCurrent(){
      return this.$store.state.isCurrent
    },
    //写一个计算属性  判断isCurrent 
    showCity(){
      if(this.isCurrent==="nei"){
        return localStorage.getItem("city")
      }else{
        return localStorage.getItem("waiCity")
      }
    },
  },
  watch:{
    async currentTitle(){
      let result = await getHotel.get(`http://localhost:8080/list?city_id=${this.currentTitle}`)
      this.hotelInfo=result.data.summary
      this.hotelList = result.data.list.slice(0,4)
      console.log(this.hotelList)
      this.vipHotelList = result.data.list.slice(4)
    }
  }
}
</script>

<style lang='stylus' scoped>
.containerBox
    height 100%
    overflow:scroll
.header
    position fixed
    top 0
    z-index 10
    width 100%
    align-items: center;
    height .44rem
    display: flex;
    justify-content: space-between;
    font-size: .16rem;
    font-weight: 400;
    background: #fff;
    .back
        display: inline-flex;
        justify-content: center;
        min-width .44rem
        align-items: center 
        height: .44rem
        em
            display: block;
            width:.44rem
            height:.44rem
            background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzOCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNDE0LjU4M2MuMzkuMzg4LjU4Ni44NTguNTg2IDEuNDA3IDAgLjU2LS4xOTggMS4wMzItLjU5NCAxLjQxNkw2LjgyOCAxMy45MzNIMzZjLjU1MiAwIDEuMDI0LjE5NSAxLjQxNC41ODQuMzkuMzg4LjU4Ni44NTcuNTg2IDEuNDA3cy0uMTk2IDEuMDE5LS41ODYgMS40MDdjLS4zOS4zODgtLjg2Mi41ODMtMS40MTQuNTgzSDYuODI4bDEwLjU3OCAxMC41MjhjLjM5Ni4zODQuNTk0Ljg1Ni41OTQgMS40MTUgMCAuNTUtLjE5NiAxLjAyLS41ODYgMS40MDctLjM5LjM4OS0uODYyLjU4NC0xLjQxNC41ODRhMS45MzcgMS45MzcgMCAwIDEtMS40MjItLjU3NmwtMTQtMTMuOTMzQTEuOTgzIDEuOTgzIDAgMCAxIDAgMTUuOTI0YzAtLjU0LjE5Mi0xLjAxMS41NzgtMS40MTVsMTQtMTMuOTM0QTEuOTcgMS45NyAwIDAgMSAxNiAwYy41NTIgMCAxLjAyNC4xOTUgMS40MTQuNTgzeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+') 50%/.19rem .16rem no-repeat;
    .opt
        min-width .44rem
        height: .44rem
.head-search.style-1
    background-color: #50b8ea;
.head-search.style-2
    background-color: #704dff;
.head-search
    padding-top .44rem
    position: relative;
    height: 5rem;
    padding: 0 .25rem;
    font-size: .15rem;
    color: #fff;
    background-image: linear-gradient(315deg,transparent,hsla(0,0%,100%,.4));
    transition: background .4s ease;
    .title
        padding-top: .67rem;
        font-family: PingFangSC-Thin;
        font-size: .35rem;
        line-height: .5rem;
    .tabs
        margin-top: .6rem;
        .tab.current
            padding-bottom: .055rem;
            border-bottom: .02rem solid #fff;
            font-weight: 600;
            color: #fff;
        .tab
            margin-left: .21rem;
            color: hsla(0,0%,100%,.9);
    .search-form
        margin-top: .21rem;
        .search-wrap
            .search-input-wrap
                display: flex;
                align-items: center;
                height: .45rem;
                padding: 0 .16rem;
                border-radius: .05rem;
                color: rgba(0,0,0,.2);
                background: #fff;
                input
                    flex: 1;
                    border: 0;
                    height: .3rem;
                    line-height: .3rem;
                    color: rgba(0,0,0,.4);
                    &::placeholder
                        color: rgba(0,0,0,.5);
        .date-calendar
            display: flex;
            align-items: center;
            border-radius: .05rem;
            margin-top: .1rem;
            padding: 0 .16rem;
            height: .45rem;
            background: #fff;
            color: rgba(0,0,0,.2);
            input
              flex: 1;
              border: 0;
              height: .3rem;
              line-height: .3rem;
              color: rgba(0,0,0,.4);
              border none
              &::placeholder
                color: rgba(0,0,0,.5);
        .button-control
            margin-top: .2rem;
            .search-btn
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: .45rem;
                border: .015rem solid #fff;
                background: transparent;
                border-radius: .05rem;
                color: #fff;
                font-weight: 600;
                .icon-search
                    margin-right: .05rem;
                    width: 0.13rem;
                    height: 0.13rem;
                    background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNDg2IDE4LjIxNWwuMDc2LjA3MyA0Ljk2NiA1LjA0M2ExLjYxIDEuNjEgMCAwIDEgMCAyLjI0NWwuMDUxLS4wNTFjLS42MS42Mi0xLjU5OS42MjItMi4yMTEgMEwxOC40IDIwLjQ4MmExLjU5IDEuNTkgMCAwIDEtLjAyLS4wMjIgMTEuMTYgMTEuMTYgMCAwIDEtNy4wNjcgMi41MTZDNS4wNjUgMjIuOTc2IDAgMTcuODMyIDAgMTEuNDg4IDAgNS4xNDMgNS4wNjUgMCAxMS4zMTQgMGM2LjI0OCAwIDExLjMxNCA1LjE0MyAxMS4zMTQgMTEuNDg4IDAgMi41MTItLjc5NSA0LjgzNy0yLjE0MiA2LjcyN3ptLTkuMTcyIDEuMzk0YzQuNDE3IDAgNy45OTktMy42MzYgNy45OTktOC4xMjEgMC00LjQ4Ni0zLjU4Mi04LjEyMi04LTguMTIyLTQuNDE3IDAtNy45OTggMy42MzYtNy45OTggOC4xMjIgMCA0LjQ4NSAzLjU4MSA4LjEyMSA3Ljk5OSA4LjEyMXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==') 50%/contain no-repeat;
    .tips
        margin-top: .15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .12rem;
        color: hsla(0,0%,100%,.6);
        .icon-tips
            margin-left: .05rem;
            width: 0.12rem;
            height: 0.12rem;
            background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMjQuMTUyYy02LjYyNyAwLTEyLTUuMzcyLTEyLTEyIDAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTJjMCA2LjYyOC01LjM3MyAxMi0xMiAxMnptMC0xLjY1NWM1LjcxMyAwIDEwLjM0NS00LjYzMSAxMC4zNDUtMTAuMzQ1QzIyLjM0NSA2LjQ0IDE3LjcxMyAxLjgwOCAxMiAxLjgwOGMtNS43MTMgMC0xMC4zNDUgNC42MzEtMTAuMzQ1IDEwLjM0NCAwIDUuNzE0IDQuNjMyIDEwLjM0NSAxMC4zNDUgMTAuMzQ1em0wLTEzLjI0MWEyLjA2OSAyLjA2OSAwIDEgMSAwLTQuMTM4IDIuMDY5IDIuMDY5IDAgMCAxIDAgNC4xMzh6bS4wNzcgMS42NTVjLjY4NiAwIDEuMjQxLjU1NiAxLjI0MSAxLjI0MXY1Ljc5M2ExLjI0MSAxLjI0MSAwIDEgMS0yLjQ4MiAwdi01Ljc5M2MwLS42ODUuNTU1LTEuMjQxIDEuMjQxLTEuMjQxeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==') 50%/contain no-repeat;
.tab-hotel 
  padding: .25rem;
  background #f5f5f5;
  .head
      font-size: .21rem;
      font-weight: 600;
      color: #000;
      line-height: .3rem;
  .tabs
      margin-top: .15rem;
      display: flex;
      justify-content: space-between;
      height: .21rem;
      .tab
          padding-bottom: .21rem;
          font-size: .15rem;
          line-height: .21rem;
          color: rgba(0,0,0,.9);
      .tab.current
          padding-bottom: .25rem;
          color: #11bf79;
          font-weight: 600;
          border-bottom: .02rem solid #11bf79;
  .container
      padding-top: .18rem;
      min-height: 6rem;
      .cont-grid
          display: grid;
          grid-template-columns: 100%;
          grid-gap: .15rem;
          .summary
              margin-bottom: .15rem;
              border-radius: .05rem;
              background: #fff;
              color: rgba(0,0,0,.5);
              box-shadow: 0 0.05rem 0.1rem 0 rgba(0,0,0,.04);
              .summary-grid
                  padding: .17rem .13rem;
                  display: grid;
                  grid-template-columns: repeat(3,1fr);
                  row-gap: .1rem;
                  .title
                      grid-column: span 3;
                      display: flex;
                      align-items: center;
                      color: rgba(0,0,0,.6);
                      white-space: nowrap;
                      span.global
                          background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNTA0IDBDNi40OSAwIDAgNi40OTMgMCAxNC41UzYuNDkyIDI5IDE0LjUgMjlDMjIuNTEgMjkgMjkgMjIuNTA3IDI5IDE0LjVTMjIuNTA5IDAgMTQuNTA0IDB6bTExLjA5NCAxMi41NjdoLTQuMzg1Yy0uMi0yLjktLjg3OS02LjA0OS0xLjg4NS04LjIzIDMuMjQyIDEuNTQ0IDUuNjMyIDQuMzY0IDYuMjcgOC4yM3pNMTQuNTAyIDIuOWMuNjQgMCAzLjA1OCAyLjg5OSAzLjQ4NiA5LjY2NmgtNi45NzRDMTEuNDQ0IDUuOCAxMy44NTggMi45IDE0LjUgMi45aC4wMDJ6TTkuNjczIDQuMzM4QzguNjcgNi41MTggNy45OSA5LjY2NyA3Ljc5IDEyLjU2N0gzLjQwMkM0LjA0IDguNyA2LjQzIDUuODggOS42NzMgNC4zMzd6TTMuMzggMTYuNDI0aDQuMzk5Yy4xODcgMi45Ljg3MyA2LjE3NiAxLjg5NSA4LjM5MS0zLjI4OC0xLjU2Ni01LjY5Ny00LjUyNC02LjI5NC04LjM5MXptNy42MjQgMEgxOGMtLjM5OSA1LjgtMi44NSA5LjQ5Mi0zLjUgOS40OTItLjY0NiAwLTMuMDk1LTMuNjkyLTMuNDk1LTkuNDkyem04LjMyNiA4LjM5MWMxLjAyLTIuMjE1IDEuNzA2LTUuNDkxIDEuODk0LTguMzkxaDQuMzk3Yy0uNTk3IDMuODY3LTMuMDAzIDYuODI1LTYuMjkxIDguMzkxeiIgZmlsbD0iIzk5OSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+');
                          padding-left:  0.34rem;
                          font-size: .28rem
                          line-height: 1em;
                          background-position: 0;
                          background-size: contain;
                          background-repeat: no-repeat;
                          transform: scale(.5);
                          transform-origin: left center;
                      span.qyer
                          background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIuMjQxIDE4LjU5MmE4Ljc1NyA4Ljc1NyAwIDEgMC01LjI1MSA0LjMwM2wtMi44NDctMS42MzFhLjI4Mi4yODIgMCAwIDEtLjA2LS40NDVsNS43MzYtNS43MzZhLjI4My4yODMgMCAwIDEgLjQ0NC4wNTdsMS45NzggMy40NTJ6bTMuMTQ0IDUuNDg3bDIuNTc2IDQuNDk2Yy4xNDMuMjQ5LS4xMzUuNTMtLjM4Ni4zODZsLTQuNjQ1LTIuNjYyQTE0LjQzNSAxNC40MzUgMCAwIDEgMTQuNDk5IDI5QzYuNDkyIDI5IDAgMjIuNTA4IDAgMTQuNDk5IDAgNi40OTIgNi40OTIgMCAxNC40OTkgMCAyMi41MDggMCAyOSA2LjQ5MiAyOSAxNC40OTljMCAzLjY3Mi0xLjM2NSA3LjAyNS0zLjYxNSA5LjU4eiIgZmlsbD0iIzk5OSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
                          padding-left:  0.34rem;
                          font-size: .28rem
                          line-height: 1em;
                          background-position: 0;
                          background-size:contain;
                          background-repeat: no-repeat;
                          transform: scale(.5);
                          transform-origin: left center;
                  .row
                      display: grid;
                      place-items: center;
                      place-self: center;
                      grid-template-rows: 1.4fr 1fr;
                      font-size: .12rem;   
                      .hd
                          font-family: PingFang-SC-Light;
                          color: #4b96de;  
                          em
                              font-size: .27rem;
                              line-height: 1em;
                      .hd.gr
                          color: #11bf79;
                      .fd
                          color: rgba(0,0,0,.4);
.mu-text-field {
  font-size: 16px;
  width: 256px;
  min-height: 48px;
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 8px;
}

.mu-text-field.full-width {
  width: 100%;
}

.mu-text-field.has-icon {
  padding-left: 56px;
}

.mu-text-field.focus-state {
  color: #7e57c2;
}

.mu-text-field.focus-state.error {
  color: #f44336;
}

.mu-text-field.has-label {
  min-height: 72px;
}

.mu-text-field-icon {
  position: absolute;
  left: 16px;
  top: 12px;
}

.mu-text-field.has-label .mu-text-field-icon {
  top: 36px;
}

.mu-text-field-content {
  display: block;
  height: 100%;
  padding-bottom: 12px;
  padding-top: 4px;
}

.mu-text-field.disabled .mu-text-field-content {
  color: rgba(0, 0, 0, 0.38);
  cursor: not-allowed;
}

.mu-text-field.has-label .mu-text-field-content {
  padding-top: 28px;
  padding-bottom: 12px;
}

.mu-text-field-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 32px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.87);
  font-family: inherit;
  position: relative;
}

.mu-text-field-help {
  position: absolute;
  margin-top: 6px;
  font-size: 12px;
  line-height: 12px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  left: 0;
  right: 0;
}

.mu-text-field.has-icon .mu-text-field-help {
  left: 56px;
}

.mu-text-field.error .mu-text-field-help {
  color: #f44336;
}

.mu-text-field.disabled .mu-text-field-help {
  color: inherit;
}

.mu-text-field-line {
  margin: 0;
  height: 1px;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
  left: 0;
  right: 0;
  position: absolute;
}

.mu-text-field.has-icon .mu-text-field-line {
  left: 56px;
}

.mu-text-field-line.disabled {
  height: auto;
  background-color: transparent;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.38);
}

.mu-text-field-focus-line {
  margin: 0;
  height: 2px;
  border: none;
  background-color: #7e57c2;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -1px;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.mu-text-field.has-icon .mu-text-field-focus-line {
  left: 56px;
}

.mu-text-field-focus-line.error,
.mu-text-field-focus-line.focus {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}

.mu-text-field-focus-line.error {
  background-color: #f44336;
}

.mu-text-field-textarea {
  resize: vertical;
  line-height: 1.5;
  position: relative;
  height: 100%;
  resize: none;
}

.mu-text-field-multiline {
  width: 100%;
  position: relative;
}

.mu-text-field-textarea-hide {
  width: 100%;
  height: auto;
  resize: none;
  position: absolute;
  padding: 0;
  overflow: auto;
  visibility: hidden;
}

.mu-text-field-label {
  line-height: 20px;
  -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  cursor: text;
  -webkit-transform: translateZ(0) scale(0.75);
  transform: translateZ(0) scale(0.75);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mu-text-field.has-label .mu-text-field-label {
  top: 8px;
  position: absolute;
}

.mu-text-field.has-label .mu-text-field-label.float {
  -webkit-transform: translate3d(0, 28px, 0) scale(1);
  transform: translate3d(0, 28px, 0) scale(1);
  color: rgba(0, 0, 0, 0.38);
}

.mu-text-field-hint {
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  color: rgba(0, 0, 0, 0.38);
  line-height: 34px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: text;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.mu-text-field-hint.show {
  opacity: 1;
}

.mu-text-field.multi-line .mu-text-field-hint {
  line-height: 1.5;
}

.mu-select-field .mu-dropDown-menu {
  display: block;
  width: 100%;
  height: 32px;
}

.mu-select-field .mu-dropDown-menu-text {
  line-height: 32px;
  height: 32px;
  padding-left: 0;
  padding-right: 24px;
  word-wrap: break-word;
  overflow: hidden;
}

.mu-select-field .mu-dropDown-menu-line {
  display: none;
}

.mu-select-field .mu-dropDown-menu-icon {
  right: 0;
  top: 6px;
}
.hotel-title
  font-size: .15rem;
  font-weight: 600;
  line-height: .21rem;
  color: #000;
.hotel-list
  box-sizing: border-box;
  margin-left: -.25rem;
  padding: .15rem .25rem;
  width: 100vw;
  overflow-x: auto;
  white-space: nowrap;
  .item
    display: inline-block;
    width: 1.85rem;
    height: 2.05rem;
    margin-left .1rem
    vertical-align: top;
  .hotel-card
    background: #fff;
    box-shadow: 0 0.05rem 0.1rem 0 rgba(0,0,0,.04);
    border-radius: .05rem;
    overflow: hidden;
    .wrap
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
    .pic
      position: relative;
      padding-top: 62.162162%;
      img
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    .caption
      flex: 1;
      padding: .1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #000;
    .name
      font-size: .14rem;
      font-weight: 500;
      line-height: .2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    .grade-wrap
      display: flex;
      align-items: center;
      font-size: .12rem;
      line-height: .185rem;
      font-family: PingFang-SC-Light;
      .star
        display: block;
        width: .11rem;
        height: .11rem;
        background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMiAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMjU1IDE3Ljg5MUw2LjIyOCAyMC4wMWExLjYgMS42IDAgMCAxLTIuMzIxLTEuNjg3bC43NjktNC40ODRhMS42IDEuNiAwIDAgMC0uNDYtMS40MTdMLjk1OCA5LjI0NmExLjYgMS42IDAgMCAxIC44ODctMi43M2w0LjUwMi0uNjU0YTEuNiAxLjYgMCAwIDAgMS4yMDUtLjg3NUw5LjU2NS45MDdhMS42IDEuNiAwIDAgMSAyLjg3IDBsMi4wMTMgNC4wOGExLjYgMS42IDAgMCAwIDEuMjA1Ljg3NWw0LjUwMi42NTVhMS42IDEuNiAwIDAgMSAuODg3IDIuNzI5bC0zLjI1OCAzLjE3NWExLjYgMS42IDAgMCAwLS40NiAxLjQxN2wuNzcgNC40ODRhMS42IDEuNiAwIDAgMS0yLjMyMiAxLjY4N2wtNC4wMjctMi4xMThhMS42IDEuNiAwIDAgMC0xLjQ5IDB6IiBmaWxsPSIjRjkwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=") 50%/contain no-repeat;
      .gap
        border-right: .01rem solid #000;
        margin: 0 .05rem;
        height: .1rem;
      
    .price
      font-family: PingFang-SC-Light;
      font-size: .12rem;
      color: rgba(0,0,0,.4);
      em
        margin-right: .02rem;
        font-size: .15rem;
        font-weight: 600;
        color: #ff9800;
.hotel-more
  justify-content: center;
  align-items: center;
  margin-top: -.15rem;
  display: flex;
</style>