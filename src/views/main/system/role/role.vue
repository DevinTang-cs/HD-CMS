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
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    >
    </page-content>
    <page-modal
      :modal-config="modalConfig"
      pageName="/role"
      ref="pageModalRef"
      :default-info="defaultInfo"
      :other-info="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        ></el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import searchFormConfig from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import pageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import usePageModal from '@/hooks/usePageModals'
import { useStore } from 'vuex'
import { getMenuLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch, pageModal },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const { pageContentRef, handleQueryClick, handleResetClick } =
      usePageSearch()
    const { pageModalRef, handleEditData, handleNewData, defaultInfo } =
      usePageModal(undefined, (item: any) => {
        const leafKeys = getMenuLeafKeys(item.menuList)
        nextTick(() => elTreeRef.value?.setCheckedKeys(leafKeys, false))
      })
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList: menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      handleEditData,
      handleNewData,
      defaultInfo,
      pageModalRef,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 40px;
}
</style>
