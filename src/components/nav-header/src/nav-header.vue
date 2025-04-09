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
      <breadcrumb :breadcrumb="breadcrumb"></breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import Breadcrumb from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumb } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    userInfo,
    Breadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()
    const route = useRoute()
    // const userMenus = store.state.login.userMenus
    // const currentPath = route.path
    const breadcrumb = computed(() => {
      const userMenus = store.state.login.userMenus
      // const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumb(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumb
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
