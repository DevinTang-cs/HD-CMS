const rules = {
  name: [
    {
      required: true,
      message: '必须输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[A-Za-z0-9]{6,10}$/,
      message: '用户名必须为6-10位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[A-Za-z0-9]{6,10}$/,
      message: '密码必须为6-10位字母或数字',
      trigger: 'blur'
    }
  ]
}
export default rules
