import { IForm } from '@/base-ui/form/type/types'

export const modalConfig: IForm = {
  formItems: [
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
      field: 'password',
      type: 'password',
      isHidden: true,
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话',
      rules: [],
      placeholder: '请输入电话号码'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
