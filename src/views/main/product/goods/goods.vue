<template>
  <div class="goods">
    <page-content page-name="/goods" :content-table-config="contentTableConfig">
      <template #image="scope">
        <el-image
          style="height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :hide-on-click-modal="true"
          :z-index="1000"
        ></el-image>
      </template>
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.status ? 'success' : 'danger'"
          >{{ scope.row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: { pageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
