const rules = {
  telephone: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入合法手机号',
      trigger: 'blur'
    }
  ],
  passcode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ]
}

export default rules
