type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems?: IFormItem[]
  labelWidth?: string
  colLayout?: object
  itemStyle?: object
}
