<template>
  <div class="login">
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input v-model="ruleForm.psw"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">登入</el-button>
    </div>
  </div>
</template>

<script>
// var reg=/^\d{11}$/
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      ruleForm: {
        phone: '',
        psw: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
        ],
        psw: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(['loginFun']),
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.loginFun(this.ruleForm).then(obj => {
            console.log(obj)
            if (obj.suc) {
              this.$message.success('登入成功')
              this.$router.push('/')
            } else {
              this.$message.error('登入失败')
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
