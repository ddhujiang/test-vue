import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import  Hello from './components/HelloWorld'
import {mixinsTest} from './components/minxiPage'
Vue.mixin(mixinsTest);   //全局使用
Vue.use(ElementUI);

Vue.config.productionTip = false
// 
Vue.component('Hello',Hello)
router.beforeEach((to,from,next)=>{ 
  let isLogin = localStorage.getItem('isLogin')
  if(isLogin&&to.name==='Login'){
    next({name: 'Home'})
  }else if(!isLogin&&to.name!=='Login'){
    next({name: 'Login'})
  }else{
    next()
  }
})
router.beforeResolve((to,from,next)=>{
  console.log('router.beforeResolv')
  next()
})
router.afterEach((to,from)=>{
  console.log('router.afterEach')
})   


// store.registerModule('c',{})      //注册一个模块
// store.unregisterModule('c')       //解绑一个模块
// store.watch()                     //每次state改变之后都会调用
// store.subscribe()                 //订阅，每次mutations被调用，这个api都会被调用
// store.subscribeAction()           //监听actions

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
