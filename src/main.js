import Vue from 'vue'
import App from './App'
import toastRegistry from './toast/index'

Vue.config.productionTip = false
toastRegistry()
// Vue.use(toastRegistry)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
