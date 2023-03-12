var hello = function (name) {
    return "hello " + name;
};
hello('lisi');
var text1 = 'a';
var arr = [1];
/**
 * 元组 数组内每一项类型都是被事先定义好的 可以push预先定义好的类型其中之一
 * undefined 与 null 是所有数据类型的子类型
 * **/
var yarr = [undefined, null];
yarr.push(true);
var lisi = {
    id: '19931002',
    name: 'lisi'
};
// lisi.id = '1' 会报id是只读属性的错误
var fun = function (a, b) {
    // if (b) return a + b // a+b return结果为string不符合定义的返回类型 会报错
    return a;
};
fun(1);
var fun2 = function (a, b) {
    return a;
};
fun2(1, '2');
/**
 * 联合类型 用 |表示
 * **/
var numOrStr = 1;
/**
 * 类型断言 关键字as
 * **/
var getLength = function (val) {
    var typeS = val;
    if (typeS.length)
        return typeS.length;
    else {
        var typeN = val;
        return typeN.toString().length;
    }
};
getLength(1);
/**
 * type guard 类型守护 在函数调用的时候用typeof instanceof 在内部判断类型
 * **/
var getLengthG = function (val) {
    if (typeof val == 'string')
        return val.length;
    else
        return val.toString().length;
};
/**
 * enum 枚举
 * **/
var sexMap;
(function (sexMap) {
    sexMap[sexMap["man"] = 0] = "man";
    sexMap[sexMap["woman"] = 1] = "woman";
})(sexMap || (sexMap = {}));
console.log(sexMap);
console.log(0 /* man */); // 0 ts编译的时候只会输出被引用的k
/**
 * 泛型 将不确定的类型（有可能可以接受各种精确的类型，有可能是用户自定义类型）在运行的时候才进行定义，要比确定类型（比如定死 string）要灵活的很多
 * **/
var generics = function (log) {
    return log;
};
var generics1 = generics(1);
var swap = function (val) {
    return [val[1], val[0]];
};
var swaper = swap([1, '2']);
// const echoLength = <T>(arg: T): T => {}  // 可以是任意返回值
var echoLength = function (arg) {
    console.log(arg.length);
    return arg;
};
// const echo_num = echoLength(2) //报错 Argument of type 'number' is not assignable to parameter of type 'hasLength'.
var echo_str = echoLength('2');
var echo_arr = echoLength([1, 2]);
var newPerson = function (name, age) {
    return { name: name, age: age };
};
var person = newPerson('lisi', 30);
console.log(person);
var person2 = { name: 'lisi', age: 30 };
console.log(person2);
/**
 * 字面量类型 类型等于固定的值
 * **/
var number = 1;
