import Vue from 'vue'
import App from './App'
import commonFun from './common/common.js'

Vue.config.productionTip = false
Vue.prototype.$commonFun = commonFun;
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
