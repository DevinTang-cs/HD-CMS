import pageModal from '@/components/page-modal'
import { ref } from 'vue'

type CBType = (item?: any) => void

export default function usePageModal(newCB?: CBType, editCB?: CBType) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCB && newCB()
  }

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCB && editCB(item)
  }

  return { pageModalRef, handleEditData, handleNewData, defaultInfo }
}
