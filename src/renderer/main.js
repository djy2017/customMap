import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
//  $mount 手动挂载 等同于 el：‘#app’ 但是 手动挂载是在准备好之后才执行挂载
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
