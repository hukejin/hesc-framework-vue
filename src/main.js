import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/vant-global.scss'
import './styles/global.scss'

import Vant from 'vant'
import 'vant/lib/index.css'

import * as SysUtil from './assets/js/utils/systemutil'
Vue.prototype.sysutil = SysUtil
Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
