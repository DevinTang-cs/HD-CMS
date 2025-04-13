import { IForm } from '@/base-ui/form/type/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '介绍',
      rules: [],
      placeholder: '请输入真实姓名'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
