<template>
  <div class="user">
    <HdForm v-bind="searchFormConfig"></HdForm>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HdForm from '@/base-ui/form'
import searchFormConfig from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HdForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
