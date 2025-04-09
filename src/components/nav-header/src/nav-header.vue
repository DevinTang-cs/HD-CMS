<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <template v-if="isFold">
        <div class="fold-menu"><i-ep-fold /></div>
      </template>
      <template v-else>
        <div class="fold-menu"><i-ep-expand /></div>
      </template>
    </el-icon>
    <div class="content">
      <div class="info">info</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    userInfo
  },
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
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
    align-items: center;
  }
}
</style>
