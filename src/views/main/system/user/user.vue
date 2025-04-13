<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="/users"
    >
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
    <page-modal :modal-config="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchFormConfig from './config/search.config'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { contentTableConfig } from './config/content.config'
import pageContent from '@/components/page-content/index'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import pageModal from '@/components/page-modal'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup(props) {
    const { pageContentRef, handleQueryClick, handleResetClick } =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
