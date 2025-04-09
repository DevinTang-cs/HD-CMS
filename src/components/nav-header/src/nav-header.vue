<template>
  <div class="nav-header" @click="handleFoldClick">
    <el-icon>
      <template v-if="isFold">
        <div class="fold-menu"><i-ep-fold /></div>
      </template>
      <template v-else>
        <div class="fold-menu"><i-ep-expand /></div>
      </template>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 100%; /* 确保容器有高度，可根据实际情况调整 */
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
