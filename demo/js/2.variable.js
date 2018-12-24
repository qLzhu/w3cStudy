/**
 * 变量的值可以是任意类型的值
 */

var a = 123;
var b = 1.23;
var c = "This is string";
var d = true;
var e = null;
var f = undefined;
var j = {name: "wang"}
var h = Symbol(); // ES6(ECMAScript2015)新增的基本类型
console.log("声明任意值的变量",a,b,c,d,e,f,j.name,h);


/**
 * 变量提升
 *
 * 因为ES5有预解析的原因，使用var声明的变量会被自动提升到作用域的顶部，
 * 这种现象叫做hoisting，值为undefined
 */

console.log("变量提升",r);
var r = 123;



/**
 * 声明常量的方法
 */

// ES5 
Object.defineProperty(window, "constant", {
	// configurable: true, // 是否可以删除
	// enumerable: true,   // 是否可以枚举
	writable: false,
	value: 3.14
	// get: function() {},
	// set: function() {}
});

constant = 10;
console.log("ES5声明常量并修改值", constant);

// ES6
const constantTwo = 3.14159;
console.log("ES6声明常量", constantTwo);


/**
 * 预解析
 *
 * 1.声明同名的变量和函数未赋值的情况下，函数的优先级更高
 * 函数会覆盖未赋值的变量
 *
 * 2.声明同名的变量和函数赋值的情况下，函数无法覆盖同名的变量
 * 
 * 3.声明两个同名的变量或函数，后者都会覆盖前者
 */

var variable;
function variable () {

} 

console.log("变量和函数同名且未赋值的情况下", variable);

var variableTwo = 3.14159;
function variableTwo () {
	return 3;
} 

console.log("变量和函数同名且赋值的情况下", variableTwo);

var variableThree = 3.14;
var variableThree = 4.13;
console.log("同时声明两个相同的变量", variableThree);

function fun () {
	return 3;
}

function fun () {
	return 4;
}

console.log("同时声明两个相同的函数", fun);
