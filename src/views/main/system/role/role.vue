<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      page-name="/role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import searchFormConfig from './config/search.config'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
