const hello = () => {
  console.log("This is module exports");
}

// module.exports.hello 的意思是导出一个 hello
// = hello 的意思是上方定义的 hello 函数
module.exports.hello = hello;
