import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  // 放到vue的实例当中
  store,
  router,
  el:"#app",
  render: h => h(App)
})