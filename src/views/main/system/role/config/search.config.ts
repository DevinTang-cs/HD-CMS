import { IForm, IFormItem } from '@/base-ui/form/type/types'

const formItems: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '角色名称',
    rules: [],
    placeholder: '请输入角色名称'
  },
  {
    field: 'intro',
    type: 'input',
    label: '权限',
    rules: [],
    placeholder: '请输入权限名称'
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]

const labelWidth = '120px'
const itemStyle = {
  padding: '20px 20px'
}
// const colLayout = undefined
const searchFormConfig: IForm = {
  labelWidth: labelWidth,
  itemStyle: itemStyle,
  formItems: formItems
}

export default searchFormConfig
