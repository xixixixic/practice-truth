import Vue from 'vue'
import App from './App'
import toastRegistry from './toast/index'
import globalPlugin from './plugins/global'
Vue.config.productionTip = false

Vue.use(globalPlugin)
Vue.use(toastRegistry)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
