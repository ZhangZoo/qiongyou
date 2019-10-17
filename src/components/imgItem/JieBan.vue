<template>
  <div
    class="vue-waterfall-slot item-move"
    :style="`width: 168px; height: 247px;left:`+posLeft+`px;top:`+posTop+`px`"
  >
    <a
      href=""
      data-bn-ipg="mindex-buddy_group-2"
      class="flow-buddy-card flow-card"
    >
      <main class="card-box">
        <img
          alt=""
          :src="image"
          lazy="loaded"
        />
        <div class="content">
          <aside class="tag">
            <img class="avatar" :src="imgInfo.avator" alt="">
            <span class="tag-name">{{imgInfo.together_info.sj_name}}</span>
          </aside>
          <h4 class="place">{{imgInfo.together_info.tag_desc}}</h4>
          <h5 class="time"></h5>
          <p class="intro">{{imgInfo.title}}</p>
        </div>
      </main>
    </a>
  </div>
</template>

<script>
import layout from "../../mixins/layout.js"
export default {
    props:['imgInfo','index','lineNum'],
    mixins:[layout],
    data(){
      return{
        boxheight:247
      }
    },
    computed:{
        // ?imageMogr2/auto-orient/thumbnail/800x/quality/90|imageView2/0/w/348/h/464|imageslim/format/jpg
        image(){
            return this.imgInfo.cover+"?imageMogr2/auto-orient/thumbnail/800x/quality/90|imageView2/0/w/348/h/464|imageslim/format/jpg"
        },
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
};
</script>

<style lang='stylus' scoped>
.vue-waterfall-slot 
    // position: absolute;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .flow-card 
        position: relative;
        width: 100%;
        -moz-column-break-inside: avoid;
        break-inside: avoid;
        height: 100%;
        margin-bottom: 10px;
        .card-box
            width: 100%;
            height: 225px;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            img
                height: 100%;
                display: block;
            .content    
                position: absolute;
                top: 0;
                left: 0;
                padding-top: 40px;
                width: 100%;
                text-align: center;
                height: 100%;
                box-sizing: border-box;
                .tag
                    display: inline-block;
                    height: 25px;
                    line-height: 25px;
                    font-size: 0;
                    border-radius: 12.5px;
                    background-color: #fff;
                    padding: 1px 7.25px 0 1.5px;
                    .avatar
                        display: inline-block;
                        vertical-align: middle;
                        width: 22px;
                        height: 20px;
                        border-radius: 50%;
                    .tag-name
                        font-size: 13px;
                        color: #000;
                        display: inline-block;
                        vertical-align: middle;
                        font-weight: 700;
            .place
                margin-top: 17px;
                color: #fff;
                font-size: 16px;
                line-height: 22.5px;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: -webkit-center;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                font-weight: 700;
                -webkit-box-orient: vertical;
            .time
                margin-top: 8px;
                color: #fff;
                font-size: 12px;
                line-height: 16px;
                font-weight 400
            .intro
                -webkit-box-orient: vertical;
                position: absolute;
                bottom: 18px;
                width: 100%;
                padding: 0 12px;
                box-sizing: border-box;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 700;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                color: #fff;
                font-size: 15px;
                line-height: 21px;
                max-height: 84px;
                text-align: left;
            &::after
                content: "结伴";
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 8px 0 8px 0;
                color: #fff;
                background: linear-gradient(90deg,#ff5e62,#f96);
                background: -webkit-linear-gradient(right,#ff5e62,#f96);
                display: block;
                text-align: center;
                width: 48px;
                height: 25px;
                line-height: 25px;
                font-size: 14px;            
            
</style>