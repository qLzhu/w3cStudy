/**
 * 全局属性（顶层属性）
 * 
 * infinity
 * NaN
 * undefined
 */


/**
 * 全局函数（顶层函数）
 * 
 * encodeURI()
 * decodeURI()
 * encodeURIComponent()
 * decodeURIComponent()
 * escape()
 * unescape()
 * 
 * eval()
 * String()
 * Number()
 * isNaN()
 * isFinite()
 * parseInt()
 * parseFloat()
 */

/**
 * encodeURI(URIstring), 不会编译,/?:@&=+$#
 * encodeURIComponent(URIstring), 不会对 ASCII 字母和数字进行编码，也不会对-_.!~*()进行编码
 * escape(), 不会对 ASCII 字母和数字进行编码，也不会对*@-_+./。进行编码
 *
 * 解析的话上述列表中的对应的函数下方的方法进行解析
 */

var str = "https://www.baidu.com3/search= google & name";
console.log(encodeURI(str));
console.log(encodeURIComponent(str));
console.log(escape(str));

/**
 * parseInt(string, radix), parseFloat(string, radix)
 *
 * string 要解析的字符串
 * radix  指定解析数字的基数，如果忽略该参数或者为 0，则将数字以十进制解析
 * 如果以 “0x” 或 “0X” 开头，将以 16 为基数，八进制需要指定基数
 */
console.log(parseInt("12200"));      // 12200
console.log(parseInt("01010"));      // 520
console.log(parseInt("0x134"));      // 308
console.log(parseInt("fafafa"));     // NaN
console.log(parseInt("hell 10"));    // NaN, 非法字符
console.log(parseInt("99numbar"));   // 99,  遇到非法字符直接返回
console.log(parseInt(" 100 "));      // 100, 字符串前后有空格是被允许的

console.log(parseInt("fafafa", 16)); // 16448250


/**
 * isNaN(x) 用于检查其参数是否是非数字值
 * 返回 Boolean 结果
 */

 console.log("isNaN 检测参数是否为非数字");
 console.log(isNaN("01"));        // false
 console.log(isNaN("NaN"));       // true
 console.log(isNaN("infinity"));  // true
 console.log(isNaN("hello"));     // true

 console.log("isFinite 检测参数是否是无穷大，不是返回true");
 console.log(isFinite("01"));        // true
 console.log(isFinite("NaN"));       // false
 console.log(isFinite("infinity"));  // false
 console.log(isFinite("hello"));     // false, 非法字符


 /**
  * eval(string) 函数可计算某个字符串，并执行其中的的 JavaScript 代码
  */

  eval("alert('string')");