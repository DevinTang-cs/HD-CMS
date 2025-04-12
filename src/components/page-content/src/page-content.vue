<template>
  <div class="page-content">
    <my-table
      :list-data="dataList"
      v-bind="contentTableConfig"
      :prop-list="contentTableConfig.propList"
    >
      <template #headerHandler>
        <el-button type="primary" size="small">新建用户</el-button>
        <el-button size="small">刷新</el-button>
      </template>
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="small" type="default">编辑</el-button>
          <el-button size="small" type="default" style="color: red">
            删除
          </el-button>
        </div>
      </template>
      <template #header></template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import myTable from '@/base-ui/table/index'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    myTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    // const dataCount = computed(() => store.state.system.userCount)
    return {
      dataList
      // userCount
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
