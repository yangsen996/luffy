// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import settings from "./settings";
//element配置
import ElementUI from "element-ui"
import  "element-ui/lib/theme-chalk/index.css"
//调用
Vue.use(ElementUI)
//导入css初始化文件
import "../static/css/reset.css"
Vue.config.productionTip = false
Vue.prototype.$settings = settings;
import axios from "axios";
axios.defaults.withCredentials = false;  //组织axios携带cookie
Vue.prototype.$axios = axios;    //把axios挂载vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
