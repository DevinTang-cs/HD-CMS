import { IForm, IFormItem } from '@/base-ui/form/type/types'

const formItems: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    type: 'password',
    label: '密码',
    rules: [],
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '密码',
    rules: [],
    placeholder: '请输入密码',
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
    type: 'datepicker',
    label: '密码',
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
  padding: '20px 60px'
}
const colLayout = {
  span: 8
}
const searchFormConfig: IForm = {
  labelWidth: labelWidth,
  colLayout: colLayout,
  itemStyle: itemStyle,
  formItems: formItems
}

export default searchFormConfig
