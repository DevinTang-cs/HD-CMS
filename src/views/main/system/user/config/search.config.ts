import { IForm, IFormItem } from '@/base-ui/form/type/types'

const formItems: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: 'id',
    placeholder: '请输入id'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    field: 'password',
    type: 'password',
    label: '密码',
    rules: [],
    placeholder: '请输入密码'
  },
  {
    field: 'sport',
    type: 'select',
    label: '运动',
    rules: [],
    placeholder: '请选择运动',
    options: [
      {
        title: '篮球',
        value: 'basketball'
      },
      {
        title: '足球',
        value: 'football'
      }
    ]
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
  // colLayout: colLayout,
  itemStyle: itemStyle,
  formItems: formItems
}

export default searchFormConfig
