<template>
  <div class="page-search">
    <HdForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" @click="handleResetClick">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </HdForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HdForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HdForm
  },
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    const handleResetClick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped>
.header {
  padding-top: 20px;
}
.handle-btns {
  text-align: right;
  margin: 0 50px 20px 0;
}
</style>
