/**
 * Function
 *
 * 定义函数（函数声明、函数表达式）
 *
 * 函数最多可以有 255 个参数
 * see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions
 * 
 * 函数声明与函数表达式的区别
 * 解析器会率先读取函数声明，使其在执行任何代码之前就可以访问（也就是 函数声明提升）
 * 而函数表达式则需要解析器执行到它所在的代码行才会被解释执行
 */

 fun();
 // func(); // Uncaught TypeError: func is not a function

 function fun () {
 	 // 函数声明
 	 console.log("函数声明定义的函数");
 }

 var func = function() {
 	 // 函数表达式
 	 // 没有定义函数名称，也称为匿名函数表达式
 	 console.log("函数表达式定义的函数");
 }

 var func = function say () {
 	 // 函数表达式
 	 // 有函数名称
 }

 // Function 构造函数
 // 由于性能问题，不推荐此方式
 var funHi = new Function('a', 'b', 'return a + b');

 // 箭头函数
 // 没参数时使用小括号表示
 // 只有一个参数时可以不使用小括号
 let fa = () => {};
 let fb = name => {console.log(name)};
 let fc = (name, age) => {console.log(name, age)};
 fb("qin");
 fc("qin", 24);



 /**
  * arguments
  *
  * 主要使用的环境时当你实际传参多余规定的参数时使用（最多接受255个参数）
  * 如果只是单纯的想确定函数的参数，可以使用Function.length属性
  */

 function len () {
 	 return arguments.length;
 	 // return arguments[0] + arguments[1];
 }
 console.log("arguments", len("name", "age"));

 function flen (name) {}
 console.log("Function.length 确定函数参数的个数", flen.length);

 function flname () {}
 console.log("Function.name 返回函数声明的名称", flname.name);



 /**
  * 扩充函数的方法
  * 
  * apply(), 第一个参数是函数运行的作用域，第二个参数是数组
  * call(),  第一个同上，后续的参数需要把传递给函数的参数都枚举出来
  */

  function funap (a, b) {
  	return a + b;
  }

  function funca (c, d) {
  	// this, 指向 funap
  	return funap.apply(this, [c, d]);
  }

  function funpp (e, f) {
  	return funap.call(this, e, f);
  }

  console.log("funap 有想加的方法", funap(10, 20));
  console.log("funca 没有相加的方法", funca(20, 30));
  console.log("funpp 没有相加的方法", funpp(40, 50));