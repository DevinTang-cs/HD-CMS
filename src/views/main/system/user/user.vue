<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      page-name="/users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchFormConfig from './config/search.config'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { contentTableConfig } from './config/content.config'
import pageContent from '@/components/page-content/index'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
