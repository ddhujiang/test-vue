<template>
  <div>
    <div class="about"
         ref="dom">
      me

    </div>
    <div>{{obj.name}}</div>

  </div>

</template>
<script>
// import axios from 'axios'
// import http from '@/serve/http.js'
import serve from '@/serve/me/index'

export default {
  name: 'Me',
  data() {
    return {
      message: 778,
      name: '名字jjj',
      obj: {}
    }
  },
  created() {
    serve.getUser(123).then(res=>{
      if(res){
        console.log(res.data)
      }
    })
    // console.log(this.$route)
    // http
    //   .get('/h5/getUser?id=123')
    //   .then(res => {
    //     console.log(res)
    //     if (res.suc) {
    //       this.obj = res.data
    //     } 
    //   })
    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   },
    //   headers:{},
    // })
  },
  methods: {
    fun() {},
    fun: function() {},
    fun1(obj) {
      this.name = '新名字'
      console.log(this.$refs.dom, '---')
      console.log(this.$refs.dom1, '-11--')
    }
  }
}
</script>
