import Vue from 'vue'
import Router from 'vue-router'
import Index from "pages/index/Index.vue"
import Hotel from "pages/hotel/Hotel.vue"
import City from "pages/hotel/City.vue"
import PickDate from "pages/hotel/Date.vue"
import WaiCity from "pages/hotel/WaiCity.vue"
import Normal from "pages/index/normal/Normal.vue"
import Buiban from "pages/buiban/Buiban.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      // children:[
      //   {
      //     path:"normal",
      //     name:"normal",
      //     component:Normal,
      //   }
      // ]
    },
    {
      path:"/normal",
      name:"normal",
      component:Normal,
    },
    {
      path:"/hotel",
      name:"hotel",
      component:Hotel
    },
    {
      path:"/city",
      name:"city",
      component:City
    },
    {
      path:"/pickDate",
      name:"pickDate",
      component:PickDate
    },
    {
      path:"/waiCity",
      name:"waiCity",
      component:WaiCity
    },
    {
      path:"/buiban",
      name:"buiban",
      component:Buiban
    },

  ]
})
