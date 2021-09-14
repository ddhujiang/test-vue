import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './app/index'
import login from './login/index'

export default new Vuex.Store({
  // strict: true,
  state: {
    num:0,
    name:'这里是数据管理中心',
    token:""
  },
  getters:{
    nameNum:(state)=>{
      return `${state.name}898989`
    }
  },
  mutations: {
    //唯一可以修改state值的方法，通过this.$store.commit调用
    changeName(state,obj){
      state.name=obj.name
    }
  },
  actions: {
    asynFun({commit,state}){
      let obj={name:'接口获取'}
      setTimeout(()=>{
        commit('changeName',obj)
      },2000)
    }
  },
  modules: {
    app,
    login
  }
})
