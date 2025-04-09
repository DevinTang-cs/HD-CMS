<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span class="title" v-if="!collapse">HD_CMS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#DDD6FE"
      active-text-color="#ffffff"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 为 el-sub-menu 添加 index 属性 -->
          <el-sub-menu :index="item.id.toString()">
            <template #title>
              <el-icon>
                <!-- <i-ep-setting></i-ep-setting> -->
                <component
                  :is="iconMapping[item.icon as keyof typeof iconMapping]"
                ></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- 为 el-menu-item 添加 index 属性 -->
              <el-menu-item :index="subitem.id.toString()">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <!-- 为 el-menu-item 添加 index 属性 -->
          <el-menu-item :index="item.id.toString()">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { iconMapping } from '..'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    return {
      userMenus,
      iconMapping
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu-vertical {
    width: 100%;
    border-right: none;
    /* 修改菜单项被点击时的样式 */
    .el-menu-item:hover {
      background-color: #1890ff; /* 鼠标悬停时的背景颜色 */
      color: white; /* 鼠标悬停时的文字颜色 */
    }
    .el-menu-item.is-active {
      background-color: #1890ff; /* 选中时的背景颜色 */
      color: #fff; /* 选中时的文字颜色 */
    }
  }
}
</style>
