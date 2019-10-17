import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heightArr:[],
    lineNum: 1,
    isCurrent:"wai",
    imgInfo:{}
    // page:2,
    // imgList:[]
  },
  mutations: {
    pushHeight(state,heightData){
      // console.log(heightData)
      // console.log()

      if(state.heightArr.length>=state.lineNum){
        state.heightArr=[]
      }
        state.heightArr.push(heightData)
    },
    pushLineNum(state,lineNum){
      state.lineNum = lineNum
    },
    updateHeight(state,{heightData,index}){
      state.heightArr.splice(index,1,heightData)
    },
    clearArr(state){
      state.heightArr.splice(0);
    },
    changeBar(state,type){
      state.isCurrent = type
    },
    putImgInfo(state,imgInfo){
      state.imgInfo = imgInfo
    }
    // pushPage(state,page){
    //   state.page = page
    // },
    // pushImgList(state,imgList){
    //   state.imgList = imgList
    //   console.log(22)
    // }
  },
  actions: {
    //commit是他自己带的  后面的才是传过来的
    pushHeight({commit},heightData){
      commit('pushHeight',heightData)
    },
    pushImgList({commit},imgList){
      commit('pushImgList',imgList)
    },
    putImgInfo({commit},imgInfo){
      commit("putImgInfo",imgInfo)
    }
  }
})
