<template>
  <div
    class="vue-waterfall-slot item-move"
    :style="`width:168px; height:`+ boxheight +`px;left:`+posLeft+`px;top:`+posTop+`px`"
    :height="boxheight"
    @click="goPage(imgInfo)"
  >
    <!-- style="top: 0px; left: 0px; width: 168px; height: 248px;" -->
    <a href="javascript:void(0)" data-bn-ipg="mindex-biu_group-1" class="flow-biu-card flow-card">
      <aside class="img-box img-type-2">
        <img alt :src="imgInfo.cover" lazy="loaded" />
      </aside>
      <main class="content-box">
        <p class="title">{{imgInfo.title}}</p>
        <div class="other-box">
          <div class="author">
            <img class="avatar" :src="imgInfo.avator" alt />
            <span class="name">{{imgInfo.username}}</span>
          </div>
          <div class="nums">
            <i class="like-icon"></i>
            <span class="like-nums">{{imgInfo.nlikes}}</span>
          </div>
        </div>
      </main>
    </a>
  </div>
</template>

<script>
import layout from "../../mixins/layout.js";
export default {
  props: ["imgInfo", "index", "lineNum"],
  data() {
    return {};
  },
  mixins: [layout],
  computed: {
    boxheight() {
      return parseInt(
        (168 / this.imgInfo.cover_width) * this.imgInfo.cover_height + 80
      );
    },

  },
  mounted() {
    //调用mixins里面的方法
    this.layout(this.$store.state.lineNum);
  },
  //
  watch: {
    //调用mixins里面的方法
    lineNum(val) {
      this.layout(val);
    }
  },
  methods: {
    //留着看有没有新的跳转
    goPage(imgInfo) {
      //    this.$store.dispatch("putImgInfo",imgInfo)
      //    this.$router.push("/normal")
    }
  }

  // 在属性中不太适合使用过滤器
  // filters:{
  // }
};
</script>

<style lang='stylus' scoped>
.vue-waterfall-slot {
  position: absolute;
  margin: 0;
  padding: 0;

  .flow-card {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    display: block;

    .img-box {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      img {
        width: 100%;
        display: block;
      }
    }

    .content-box {
      width: 100%;
      margin-top: 10px;

      .title {
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
      }

      .other-box {
        display: flex;
        justify-content: space-between;
        font-size: 0;
        height: 18px;

        .author {
          display: flex;
          vertical-align: middle;
          overflow: hidden;
          align-itmes: center;

          .avatar {
            display: inline-block;
            vertical-align: middle;
            width: 18px;
            height: 18px;
            margin-right: 5px;
            border-radius: 50%;
            overflow: hidden;
          }

          .name {
            display: inline-block;
            vertical-align: middle;
            font-size: 11px;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.4);
            max-width: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .nums {
          display: flex;
          color: #666;
          vertical-align: middle;
          align-itmes: center;

          .like-icon {
            background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfTGlrZTwvdGl0bGU+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuOCI+PHBhdGggZD0iTTI2IDguMDU2QzI2IDMuNjE2IDIyLjYgMCAxOC40MjMgMCAxNi4zNiAwIDE0LjQxLjkxIDEzIDIuNDY3IDExLjU5LjkxMSA5LjYzNCAwIDcuNTc3IDAgMy40IDAgMCAzLjYxMyAwIDguMDU2YzAgLjE0OC4wMTUuMjgyLjAyNi4zOTItLjAwMy4wMzYtLjAwMy4wNzItLjAwMy4xMSAwIC43ODYuMTg2IDEuNjUyLjU1MiAyLjU2OS4wMTEuMDMyLjAyMy4wNjUuMDM3LjA5NSAyLjMxIDUuNjc1IDExLjE5NSAxMi4yIDExLjU3MyAxMi41MDFhMS4yODIgMS4yODIgMCAwIDAgMS41OTgtLjAwNmMuMzIzLS4yNjIgNy45MDItNS44NTMgMTAuOTExLTExLjE0MS4xMTMtLjE3OS4yLS4zNTEuMjc2LS41LjAyMy0uMDQ4LjA0My0uMDk1LjA3LS4xNGwuMDA4LS4wMmEuMzIzLjMyMyAwIDAgMSAuMDMyLS4wNTRjLjE4LS4zNi4zMjItLjY5NC40MzgtMS4wMTguMzE0LS44NC40NjUtMS41ODYuNDY1LTIuMjgzIDAtLjA1My0uMDAzLS4xLS4wMDYtLjE0LjAxMS0uMDk1LjAyMy0uMjIuMDIzLS4zNjV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjE2IiB5PSI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiByeD0iMS41Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iNyIgeT0iOCIgd2lkdGg9IjMiIGhlaWdodD0iNCIgcng9IjEuNSIvPjwvZz48L3N2Zz4=') no-repeat 50%;
            background-size: 100%;
            width: 13px;
            height: 18px;
            margin-right: 5px;
            display: inline-block;
          }

          span {
            font-size: 13px;
            font-family: special;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>