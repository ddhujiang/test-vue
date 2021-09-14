<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <p class="hi">{{name}}</p>
    <button @click="toRun()">这是一个按钮</button>
    <slot name="one" :age="age"></slot>
    <slot name="two"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Number,
    name:{
      type:String,
      required:true,
      default:'456'
    }
  },
  // props:['msg','name'],
  data(){
    return{
      age:123
    }
  },
  methods:{
    toRun(){
      // this.name='新名字'
      let obj={name:"jj"}
      // name
      // ar:{}

      this.$emit('changeName',obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
