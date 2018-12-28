/**
 * const
 *
 * 声明一个常量（也称之为恒量），声明后不可以重新赋值
 * 也不存在变量提升问题
 */
const space = 1000;
console.log(space); // 1000
// space = 100;
// console.log(space); // Uncaught TypeError: Assignment to constant variable


// ES5 申明常量的方式
Object.defineProperty(window, "newConst", {
  writable: false,
  configurable: false,
  value: "This is constant"
})

console.log(newConst);

newConst = "new string";

console.log(newConst); // This is constant
