/**
 * let
 *
 * 声明块级作用域的变量
 * 可以重新赋值
 * 不跟 var 一样，不存在变量提升问题
 */

// 作用域
//
if (true) {
  let space = "This is space";
  console.log(space); // This is space
}
// console.log(space);   // Uncaught ReferenceError: space is not defined


// 重新赋值
//
let nub = 100;
nub = 1000;
console.log(nub);


// 变量提升
//
console.log(varname);
// console.log(letname); // Uncaught ReferenceError: letname is not defined

var varname = "var_name";
let letname = "let_name";

// 暂时性死区
//
var tmp = 100;
// let tmp = 100;
if (true) {
  /**
   * ES6 明确规定，如果区块内有 let 或 const 命令，那么它们声明的变量从一开始就会形成封闭的
   * 作用域，那么在 let 或 const 命令声明前调用或使用它们就会报错
   *
   *   大概意思就是不管之前有没有申明该变量，只要在你使用的该区域内使用 let 或 const 对该变量
   *   声明的话，在它之前调用都会报错，不管你是重新申明还是新声明的
   *
   * 这种现象称之为“暂时性死区”
   */

  // tmp = 1000;
  // console.log(tmp);
  let tmp;
}
