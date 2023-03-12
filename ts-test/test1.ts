const hello = (name: string) => {
  return `hello ${name}`
}

hello('lisi')
const text1: string = 'a'
const arr: number[] = [1]
/**
 * 元组 数组内每一项类型都是被事先定义好的 可以push预先定义好的类型其中之一
 * undefined 与 null 是所有数据类型的子类型
 * **/
const yarr: [string, boolean] = [undefined, null]
yarr.push(true)

/**
 * interface 自定义类型 与类型别名用法类似 当考虑使用 extends 或者使用类的时候使用
 * **/
interface Iperson {
  readonly id: string // readonly 不可重新赋值 ?选填属性
  name: string
  age?: number
}
interface Ifun {
  (a: number, b?: string): number
}
const lisi: Iperson = {
  id: '19931002',
  name: 'lisi',
}
// lisi.id = '1' 会报id是只读属性的错误

const fun = (a: number, b?: string): number => {
  // if (b) return a + b // a+b return结果为string不符合定义的返回类型 会报错
  return a
}
fun(1)

const fun2: Ifun = (a, b) => {
  return a
}
fun2(1, '2')
/**
 * 联合类型 用 |表示
 * **/
let numOrStr: number | string = 1
/**
 * 类型断言 关键字as
 * **/
const getLength = (val: number | string): number => {
  const typeS = val as string
  if (typeS.length) return typeS.length
  else {
    const typeN = val as number
    return typeN.toString().length
  }
}
getLength(1)
/**
 * type guard 类型守护 在函数调用的时候用typeof instanceof 在内部判断类型
 * **/

const getLengthG = (val: number | string): number => {
  if (typeof val == 'string') return val.length
  else return val.toString().length
}
/**
 * enum 枚举
 * **/
enum sexMap {
  man,
  woman,
}
console.log(sexMap)

/**
 * 常量枚举 const enum
 * **/

const enum sexMapC {
  man,
  woman,
}
console.log(sexMapC.man) // 0 ts编译的时候只会输出被引用的k
/**
 * 泛型 将不确定的类型（有可能可以接受各种精确的类型，有可能是用户自定义类型）在运行的时候才进行定义，要比确定类型（比如定死 string）要灵活的很多
 * **/
const generics = <T>(log: T): T => {
  return log
}
const generics1: number = generics(1)
const swap = <T1, T2>(val: [T1, T2]): [T2, T1] => {
  return [val[1], val[0]]
}
const swaper = swap([1, '2'])
// console.log(swaper[1].length) 报错
/**
 * 约束泛型 在泛型中加入extends 关键字可以约束泛型
 * **/
interface hasLength {
  length: number
}
// const echoLength = <T>(arg: T): T => {}  // 可以是任意返回值

const echoLength = <T extends hasLength>(arg: T): T => {
  console.log(arg.length)
  return arg
}
// const echo_num = echoLength(2) //报错 Argument of type 'number' is not assignable to parameter of type 'hasLength'.
const echo_str = echoLength('2')
const echo_arr = echoLength([1, 2])

/**
 * 类型别名 type关键字 当使用交叉或者组合类型的时候可以考虑使用
 * **/

type newType = (name: string, age: number) => object
const newPerson: newType = (name, age) => {
  return { name, age }
}
const person = newPerson('lisi', 30)
console.log(person)
/**
 * 交叉类型 & 表示同时拥有两种类型
 * **/
interface newType3 {
  name: string
  age: number
}
type newType2 = newType3 & { isMan: boolean }

const person2: newType2 = { name: 'lisi', age: 30, isMan: true }
/**
 * 字面量类型 类型等于固定的值
 * **/
const number: 1 | 2 | 3 = 1
