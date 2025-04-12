<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      pageName="/role"
      ref="pageContentRef"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import searchFormConfig from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch },
  setup() {
    const { pageContentRef, handleQueryClick, handleResetClick } =
      usePageSearch()
    return {
      contentTableConfig,
      searchFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
