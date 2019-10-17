<template>
  <router-link
    class="vue-waterfall-slot item-move"
    :style="`width: 168px; height: 260px;left:`+posLeft+`px;top:`+posTop+`px`"
    tag="div"
    to="normal"
    @click="goPage(imgInfo)"
  >
    <a
      href="javascript:void(0)"
      data-bn-ipg="mindex-bbs_group-1"
      class="flow-bbs-card flow-card"
    >
      <aside class="img-box" >
        <img
          alt=""
          :src="image"
          lazy="loaded"
        />
          <!-- src="https://pic.qyer.com/album/user/3366/31/QkpTRBkGYEE/index" -->
      </aside>
      <main class="content-box" >
        <p class="title" >{{imgInfo.title}}</p>
        <div class="other-box" >
          <div class="author" >
            <img class="avatar" :src="imgInfo.avator" alt="">
            <span class="name" >{{imgInfo.username}}</span>
          </div>
          <div class="nums" >
            <i class="view-icon" ></i>
            <span class="view-nums" >{{imgInfo.total_views}}</span>
            <i class="reply-icon" ></i>
            <span class="reply-nums" >{{imgInfo.total_replies}}</span>
          </div>
        </div>
      </main>
    </a>
  </router-link>
</template>

<script>
import axios from "axios"
import layout from "../../mixins/layout.js"
export default {
    props:["imgInfo",'index','lineNum'],
    data(){
      return{
        boxheight:260
      }
    },
    mixins:[layout],
    computed:{
        image(){
            return this.imgInfo.cover+"?imageMogr2/auto-orient/thumbnail/800x/quality/90|imageView2/1/w/348/h/348|imageslim/format/jpg"
        },
        // imgUser(){
        //     return "background:center/100% no-repeat url("+this.imgInfo.avator+")"
        // }
    },
    mounted(){
      //调用mixins里面的方法
      this.layout(this.$store.state.lineNum)
    },
    //
    watch:{
      //调用mixins里面的方法
      lineNum(val){
        this.layout(val)
      }
    },
    methods:{
      goPage(imgInfo){

        console.log(url.split("/"))
        
        // this.$router.push("/normal?url="+url)
      }
    }
    
};
</script>

<style lang='stylus' scoped>
.vue-waterfall-slot 
    // position: absolute;
    margin: 0;
    padding: 0;
    .flow-card
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        verflow: hidden;
        display: block;
        .img-box
            width: 100%;
            height: 168px;
            border-radius: 8px;
            overflow: hidden;
            background-color: #000;
            align-items: center;
            justify-content: center;
            display: flex;
            &::after
                content: "游记";
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 8px 0 8px 0;
                color: #fff;
                background: linear-gradient(90deg,#ff5e62,#f96);
                display: block;
                text-align: center;
                width: 48px;
                height: 25px;
                line-height: 25px;
                font-size: 14px;
            img 
                width: 100%;
                height 100%
                display: block;
        .content-box
            width: 100%;
            margin-top: 5px;
            .title
                height: 42px;
                font-size: 14px;
                line-height: 21px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-weight: 600;
            .other-box
                display: flex;
                justify-content: space-between;
                font-size: 0;
                height: 18px;
                .author
                    display: inline-block;
                    vertical-align: middle;
                    display flex
                    .avatar
                        display: inline-block;
                        vertical-align: middle;
                        width: 18px;
                        height: 18px;
                        margin-right: 5px;
                        border-radius: 50%;
                        overflow: hidden;
                    .name
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 11px;
                        line-height: 18px;
                        color: rgba(0,0,0,.4);
                        max-width: 60px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                .nums
                    display: inline-block;
                    color: #666;
                    vertical-align: middle;
                    min-width: 70px;
                    font-family: special;
                    display flex
                    .view-icon
                        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzNCAyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+5p+l55yLPC90aXRsZT48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyLjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0zMS41NTEgMTEuNjJjLTMuMjg0LTcuMi05LjM5MS05LjYxLTE0LjU4Ni05LjYxUzUuNjkyIDQuNDU4IDIuNDIzIDExLjYyYy0uMjQxLjUzMi0uNDIyIDEuMDkxLS40MjMgMS40MjMgMCAuMzMyIDAgLjcwNC4yNDIgMS40MzZDNS41MzEgMjEuNjggMTIuMTU4IDI0LjIgMTcgMjQuMmM0Ljg0MiAwIDExLjQxNS0yLjU5NiAxNC42NjEtOS43MjEuMTkxLS40OTYuMjctLjkyNS4yNy0xLjQzNiAwLS41MTEtLjM1OC0xLjM3OC0uMzgtMS40MjR6Ii8+PHBhdGggZD0iTTEyLjc3NSAxMi44YTQuMiA0LjIgMCAwIDAgNC4xOSA0LjIgNC4yIDQuMiAwIDAgMCAwLTguNCA0LjIgNC4yIDAgMCAwLTQuMTkgNC4yeiIvPjwvZz48L3N2Zz4=') no-repeat 50%;
                        background-size: 100%;
                        width: 15px;
                        height: 18px;
                        margin-right: 3.5px;
                        display: inline-block;
                        vertical-align: middle;
                    span
                        font-size: 14px;
                        line-height: 14px;
                        padding-top: 3px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #666;
                        font-family: special;
                    .reply-icon
                        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+6K+E6K66PC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMC40OTMgMTYuOGMxLjMyMiAwIDIuMzk0LTEuMTQgMi4zOTQtMi41NDYgMC0xLjQwNS00Ljc4OC0xLjQwNS00Ljc4OCAwIDAgMS40MDYgMS4wNzIgMi41NDYgMi4zOTQgMi41NDZ6IiBmaWxsPSIjMzMzIi8+PHBhdGggc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMzIgMTJsLTMuNDQ3IDEuODQgMy41OTIgMS43NiIvPjxwYXRoIGQ9Ik0xMi42MyAyNS43Yy0xLjA3Mi43MDctMi43NCAxLjYyMS01LjAwNiAyLjc0M2EuMy4zIDAgMCAxLS40MjItLjM1bDEuMTE0LTMuOTZjLTMuNTUzLTIuMDAzLTUuOTgtNS40NzItNi4xOS05LjUyOS0uMzQxLTYuNjYgNS40MjktMTIuMzgyIDEyLjg4OS0xMi43OCA3LjQ2LS40IDEzLjc4NCA0LjY3NiAxNC4xMjYgMTEuMzM2LjM0MiA2LjY2LTUuNDI4IDEyLjM4Mi0xMi44ODggMTIuNzgxYTE1LjA2IDE1LjA2IDAgMCAxLTMuNjIyLS4yNHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48L2c+PC9zdmc+') no-repeat 50%;
                        background-size: 100%;
                        width: 14px;
                        height: 18px;
                        margin-right: 0.4px;
                        margin-left: 10px;
                        display: inline-block;
                        vertical-align: middle;
</style>  