import { IForm, IFormItem } from '@/base-ui/form/type/types'

const formItems: IFormItem[] = [
  // {
  //   field: 'id',
  //   type: 'input',
  //   label: 'id',
  //   placeholder: '请输入id'
  // },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    field: 'realname',
    type: 'input',
    label: '真实姓名',
    rules: [],
    placeholder: '请输入真实姓名'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '电话号码',
    rules: [],
    placeholder: '请输入电话号码'
  },
  {
    field: 'enable',
    type: 'select',
    label: '用户状态',
    rules: [],
    placeholder: '请选择状态',
    options: [
      {
        title: '启用',
        value: 1
      },
      {
        title: '禁用',
        value: 0
      }
    ]
  },
  {
    field: 'createAt',
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
  // colLayout: colLayout,
  itemStyle: itemStyle,
  formItems: formItems
}

export default searchFormConfig
