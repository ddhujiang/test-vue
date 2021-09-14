<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/me"> | Me</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log('------------')
    let isLogin = localStorage.getItem('isLogin')
    // console.log(isLogin)
    if(isLogin){
      this.changeLogin()
    }
  },
  methods:{
    ...mapMutations(['changeLogin'])
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
