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
      @edit-btn-click="handleEditData"
      @new-btn-click="handleNewData"
    >
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
    <page-modal
      :modal-config="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></page-modal>
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
import usePageModal from '@/hooks/usePageModals'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const { pageContentRef, handleQueryClick, handleResetClick } =
      usePageSearch()

    const newCB = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCB = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    const store = useStore()
    const departmentItem = modalConfig.formItems?.find(
      (item) => item.field === 'departmentId'
    )
    if (departmentItem) {
      departmentItem.options = store.state.entireDepartment.map((item: any) => {
        return { title: item.name, value: item.id }
      })
    }
    const roleItem = modalConfig.formItems?.find(
      (item) => item.field === 'roleId'
    )
    if (roleItem) {
      roleItem.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })
    }

    const { pageModalRef, handleEditData, handleNewData, defaultInfo } =
      usePageModal(newCB, editCB)
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
