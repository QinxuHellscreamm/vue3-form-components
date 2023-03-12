const Ajv = require('ajv')
const ajv = new Ajv()
const i18n = require('ajv-i18n')
const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      minLength: 2,
      keywordTest: true,
    },
    email: {
      type: 'string',
      format: 'email', // 自定义格式校验 需要用ajv.addFormat方法声明
    },
    age: {
      type: 'number',
    },
    children: {
      type: 'array',
      items: {
        required: ['name'],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
      },
    },
    isMan: {
      type: 'boolean',
    },
  },
}
ajv.addFormat('email', data => {
  const emailReg = new RegExp(
    /^\w+@[\da-z\.-]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/,
  )
  return emailReg.test(data)
})

ajv.addKeyword({
  keyword: 'keywordTest',
  // validate(schema, data) {
  //   console.log(schema, data)
  //   return schema
  // },
  macro() {
    return {
      maxLength: 4,
      type: 'string',
    }
  },
  // compile(sch, parentSchema) {
  //   console.log(sch, parentSchema)
  //   // return true
  //   return () => true
  // },
  metaSchema: {
    type: 'boolean',
  },
})
const validate = ajv.compile(schema) // 生成规则
const valid = validate({
  name: '李思111',
  email: '123@163.com',
  children: [{ name: '李诗航' }],
  isMan: true,
}) // 校验结果
if (!valid) {
  i18n.zh(validate.errors)
  console.log(validate.errors)
}
// else console.log(validate)
