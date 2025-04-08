<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="telephone">
        <el-input v-model="phone.telephone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="passcode">
        <div class="getCode">
          <el-input v-model="phone.passcode"></el-input>
          <el-button type="primary" class="getBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/phone-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const phone = reactive({
      telephone: '',
      passcode: ''
    })
    const store = useStore()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('手机登录成功')
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
}
.getBtn {
  margin-left: 5px;
}
</style>
