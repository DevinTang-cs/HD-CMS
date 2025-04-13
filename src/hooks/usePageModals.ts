import pageModal from '@/components/page-modal'
import { ref } from 'vue'

export default function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return { pageModalRef, handleEditData, handleNewData, defaultInfo }
}
