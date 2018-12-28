/**
 * os 操作系统API
 *
 * 要想使用 os 模块，需要先在文件内声明一个变量
 * 然后再把引入的 os 模块赋值给它使用
 *
 * see: http://nodejs.cn/api/os.html
 */

const os = require("os");

// os.hostname() 返回操作系统的主机名
console.log(os.hostname());

// os.arch() 返回 Node.js 二进制编译所用的操作系统CPU架构
// 通俗的意思就是你电脑是多少位的操作系统
// 32位的还64位的
console.log(os.arch());
