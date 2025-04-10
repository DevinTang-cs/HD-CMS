<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HdForm from '@/base-ui/form'
import searchFormConfig from './config/search.config'
import pageSearch from '@/components/page-search/src/page-search.vue'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
