<template>
  <div class="user">
    <HdForm v-bind="searchFormConfig" v-model="formData"></HdForm>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HdForm from '@/base-ui/form'
import searchFormConfig from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HdForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
