<template>
  <div>
    
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters,mapMutations  } from 'vuex'
export default {
  data() {
    return {
      message: 778,
      name: this.$store.state.name
    }
  },
  computed: {
    ...mapGetters(['nameNum'])
    // nameNum() {
    //   return this.$store.getters.nameNum
    // }
  },
  //  mixins:[mixinsTest],
  created() {
    console.log(this.$store)
    console.log('about------')
  },
  methods: {
    ...mapMutations ({newName:"changeName"}),
    ...mapActions(['asynFun']),
    change() {
      // this.$store.state.name='这是一个新值'
      // this.$store.commit('changeName',{name:'这是一个新值'})
      // this.newName({name:'这是一个新值'})
      this.$store.dispatch('asynFun')
      this.asynFun()
    }
  }
}
</script>
