<template>
  <div class="page-modal">
    <el-dialog title="新建" v-model="dialogVisible" width="30%" center>
      <hd-form v-bind="modalConfig" v-model="formData"></hd-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button @click="dialogVisible = false" type="primary">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HdForm from '@/base-ui/form'
import { modalConfig } from '@/views/main/system/user/config/modal.config'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HdForm
  },
  setup() {
    const dialogVisible = ref(true)
    const formData = ref({})

    return { dialogVisible, formData }
  }
})
</script>

<style scoped></style>
