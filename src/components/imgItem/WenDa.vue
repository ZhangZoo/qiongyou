<template>
  <div
    class="vue-waterfall-slot item-move"
    :style="`width: 168px; height: 212px;left:`+posLeft+`px;top:`+posTop+`px`"
  >
    <a
      href=""
      data-bn-ipg="mindex-ask_group-1"
      class="flow-ask-card flow-card"
    >
      <main class="content-box">
        <p>{{imgInfo.title}}</p>
      </main>
      <aside class="other-box">
        <div class="author">
          <i
             class="avatar" 
            style="background: url('https://pic.qyer.com/avatar/001/62/00/36/200') center center / 100% no-repeat;"
          ></i>
          <!-- <img class="avatar" :src="imgInfo.avator" alt=""> -->
          <span class="name">{{imgInfo.username}}</span>
        </div>
        <div class="nums">
          <i class="reply-icon"></i>
          <span class="reply-nums">{{imgInfo.renum}}</span>
        </div>
      </aside>
    </a>
  </div>
</template>

<script>
import layout from "../../mixins/layout.js"
export default {
    props:['imgInfo','index','lineNum'],
    data(){
      return{
        boxheight:212
      }
    },
    mixins:[layout],
    computed:{
        imgUser(){
            console.log(this.imgInfo.avator)
            return "background:center/100% no-repeat url("+this.imgInfo.avator+")"
        }
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
        overflow: hidden;
        display: block;
        text-decoration: none;
        color: #8dabbb;
        .content-box
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAAFcCAMAAACzyPYeAAACc1BMVEUAAAA+89Q847wV25MV3JIT1rtP6LgHzskGz8kHzsk/3toGzcZK57cU25NM57dK5Mow3r4L1co939o23doGzchC3tsV25IV3JNR6LlE5rYIzMdG6LYG1NAv3NcP1qQR158T2ZgT2pQN1KsR2J0N068U25IM0rAIzsAS2JoQ1qIP1agK0bYO1KkT2pYL0bML0rIK0LkJz7sGzcQN1K0Iz74P1qZE39UHzcEK0LdD39dL5MRK48gQ1qA4188GzMcK0LhP57sGzcUO1KcS2J4Iz70R16EJz7lF4NNQ57kP1alO5r9G4c8T2ZpJ4soR16JM5cI31tAL0bdG4dBI4swS2ZtD39lM5cAHzsJE39c518062MgK0LsL0rRG4dI518sIzrw72cgU25QGzcZI4s072sRC39sN07E72sIL0bg418wW4KxL5MYZ4qcGzMMT2plJ4sg62MsK0LwIzsNG4c0Y4ak828A8279O5b072sY62MpP570Y4adO5cE+3LsM0rU419EY4asV4K8828JL48NI4s8927wV4K4U37FJ48s9274r088518831tIL0bkz29g/3bkG088T37MQ1qc419IZ4qk72sEU37IV4Koz38g/3rc547g34r4+3L1C5rUw3s8x3ss447s93Lk24cM418k75LUT0MY/3rtH57Yu3NRA3con4bY85bMV3qMd160u3dI01s4m17cu29U929RA3M9D4Mg04MRE4b4z2rgS3KwV3Z034sAr18AT0roT26ZB3dQd08Ay4rgV1LQu27Eu1ske0ckk1MY83MMf1rdH4sE02b8f4bAv18UO0L5A5Lwc37US0ME22MYFlF6HAAAAHnRSTlMABhjzj0fz3cKV8/Lew5aCLRjFlvPj49nHv4JH8tmMTA8eAAAXjUlEQVR42uyYTUtbURCGk6pokUILpYUuGtM21Zh660ckWVwUExMISEAQskgg6KJko1B/QP6Bm/7ivjPz3jvnJLctFJd5z9xk//AwZ86UPOWN9Vfv126rnoPqgWbnYOdhJ8yVZO/qZm/vBt/nIN1u93Ol0sXJk/aQYTpM68N6fTisIx+jnH48RfZP9/c7+4j+DL4NvqHkQz7lOTk5wYd8yfMVB7+W754ElUwmkyRJGnmur6/bcmbn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") no-repeat top;
            background-size: 100%;
            width: 100%;
            padding-bottom: 43px;
            border-radius: 8px;
            overflow: hidden;
            color: #fff;
            position: relative;
            p
                font-size: 18px;
                font-weight: 600;
                color: #fff;
                line-height: 24px;
                width: 100%;
                padding: 0 15px;
                margin-top: 35px;
                height: 96px;
                box-sizing: border-box;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
        &::after
            content: "问答";
            border-radius: 8px 0 8px 0;
            overflow: hidden;
            width: 48px;
            height: 25px;
            font-size: 14px;
            line-height: 25px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(270deg,#0dbe7c,#0b9a65);
            background: -webkit-linear-gradient(left,#0dbe7c,#0b9a65);
            text-align: center;
            color #fff
        .other-box
            display: flex;
            justify-content: space-between;
            font-size: 0;
            height: 18px;
        .author 
            display: inline-block;
            vertical-align: middle;
            .avatar
                width: 18px;
                height: 18px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 5px;
                display: inline-block;
                vertical-align: middle;
            .name
                display: inline-block;
                vertical-align: middle;
                font-size: 11px;
                line-height: 18px;
                color: #000;
                max-width: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        .nums
            color: #666;
            font-family: special;
            display flex
            align-items center            
            .reply-icon
                width: 14px;
                height: 18px;
                margin-right: 4px;
                background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+6K+E6K66PC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMC40OTMgMTYuOGMxLjMyMiAwIDIuMzk0LTEuMTQgMi4zOTQtMi41NDYgMC0xLjQwNS00Ljc4OC0xLjQwNS00Ljc4OCAwIDAgMS40MDYgMS4wNzIgMi41NDYgMi4zOTQgMi41NDZ6IiBmaWxsPSIjMzMzIi8+PHBhdGggc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMzIgMTJsLTMuNDQ3IDEuODQgMy41OTIgMS43NiIvPjxwYXRoIGQ9Ik0xMi42MyAyNS43Yy0xLjA3Mi43MDctMi43NCAxLjYyMS01LjAwNiAyLjc0M2EuMy4zIDAgMCAxLS40MjItLjM1bDEuMTE0LTMuOTZjLTMuNTUzLTIuMDAzLTUuOTgtNS40NzItNi4xOS05LjUyOS0uMzQxLTYuNjYgNS40MjktMTIuMzgyIDEyLjg4OS0xMi43OCA3LjQ2LS40IDEzLjc4NCA0LjY3NiAxNC4xMjYgMTEuMzM2LjM0MiA2LjY2LTUuNDI4IDEyLjM4Mi0xMi44ODggMTIuNzgxYTE1LjA2IDE1LjA2IDAgMCAxLTMuNjIyLS4yNHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48L2c+PC9zdmc+") no-repeat 50%;
                background-size 100%
                display: inline-block;
                vertical-align: middle;
            span    
                font-size: 14px;
                line-height: 18px;
                padding-top: 3px;
                display: inline-block;
                vertical-align: middle;
                color: #666;
                font-family: special;

</style>