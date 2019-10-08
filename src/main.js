// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from "vue-router"
import vueResource from "vue-resource"
import App from './App'

import Home from './components/Home'
import Myvideo from './components/Myvideo'

import HelloWorld from './components/HelloWorld'
import Wo from './components/Wo'
import Wan from './components/Wan'
import Pai from './components/Pai'
import Top from './components/Top'
import Ks from './components/Ks'
import De from './components/De'
import Tou from './components/Tou'
import Da from './components/Da'
import A from './components/A'
import Sou from './components/Sou'
import Xiang from './components/Xiang'
import Kou from './components/Kou'
import Bei from './components/Bei'
import Xin from './components/Xin'
import index from './components/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueRouter);
Vue.use(vueResource);

 const router = new vueRouter({
 		routes:[
 			{path:"/",component:Home},
 			{path:"/myvideo",component:Myvideo},
 			{path:"/hello",component:HelloWorld},
 			{path:"/wo",component:Wo},
 			{path:"/wan",component:Wan},
 			{path:"/pai",component:Pai},
 			{path:"/top",component:Top},
 			{path:"/ks",component:Ks},
 			{path:"/de",component:De},
 			{path:"/tou",component:Tou},
 			{path:"/da",component:Da},
 			{path:"/a",component:A},
 			{path:"/sou",component:Sou},
 			{path:"/xiang",component:Xiang},
 			{path:"/kou",component:Kou},
 			{path:"/bei",component:Bei},
 			{path:"/xin",component:Xin},
 			{path:"/index",component:index}
 		],
 		mode:"history"
 	
 });


/* eslint-disable no-new */
new Vue({
  el: '#app',
 router,
  components: { App },
  template: '<App/>'
})


/*index.html(项目入口文件)  ->  main.js(当前项目的配置页面)  -> app.vue(根组件)*/
