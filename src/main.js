// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VCharts from 'vue-chart-js'
axios.defaults.baseURL = 'http://163.44.167.180:6565/'
// axios.defaults.baseURL = 'http://192.168.1.100:9876/'
// axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
