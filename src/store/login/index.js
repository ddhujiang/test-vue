export default{
  state: () => ({
    isLogin:false
  }),
  mutations: {
    changeLogin(state,obj){
      state.isLogin=true
    }
  },
  actions: {
    loginFun({commit,state},data){
      // setTimeout(()=>{
       
      // },0)
      let pro=new Promise((rso,rej)=>{
        let obj={suc:true,error:{mess:''},data:null}
        if(obj.suc){
          console.log(localStorage)
          localStorage.setItem('isLogin',true)
          commit('changeLogin',obj)
          rso(obj)
        }else{
          rej(obj)
        }
      })
      return pro
    }
  },
}