/**
 * 解构赋值
 * =================================================================
 * 数组的解构赋值
 * 对象的解构赋值
 */

 console.log("\n");
 console.log("解构赋值");
 console.log("=========================");
 console.log("数组的解构赋值");

/**
 * 数组
 *
 * 两边数组位数相同，解构成功
 * 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
 */

 if (true) {
   let [zhang, li, wang] = ["name_zhang", "name_li", "name_wang"];
   console.log(zhang, li, wang);
 }

 // 左边带有默认值的情况
 //
 // 右边比左边少时，会使用默认值
 // 右边对应的位数值为 undefined 时，也会使用默认值
 if (true) {
   let [zhang, li, wang = "default_name_wang"] = ["name_zhang", "name_li"];
   console.log(zhang, li, wang);
 }

 if (true) {
   let [zhang, li, wang = "default_name_wang"] = ["name_zhang", "name_li", undefined];
   console.log(zhang, li, wang);
 }

 // 不完全解构
 //
 // 左边只匹配到右边数组的一部分，这种情况下，解构依然可以成功
 if (true) {
   let [zhang, li] = ["张", "李", "王"];
   console.log(zhang, li);
 }

 // 左边的比右边的多时，左边解析不到的值为 undefined
 if (true) {
   let [zhang, li, wang] = ["张", "李"];
   console.log(zhang, li, wang);
 }

 // 解析函数返回的数组
 function arr () {
   return ["This", "is", "function"]
 }
 let [a, b, c] = arr();
 console.log(a, b, c);


/**
 * 对象的解构赋值
 * 解构不仅可以用于数组，还可以用于对象
 */
 console.log("\n");
 console.log("对象的解构赋值");

 // 变量和属性名同名的情况
 if (true) {
   // 数组是有序的，对象是无序的
   // 如果想取到正确的值，变量必须与属性同名，才能取到正确的值
   // 变量没有对应的同名属性，导致取不到值，最后等于 undefined
   let {name, age, addr} = {name: "object", age: "25"};
   console.log(name, age, addr);
 }

 // 变量和属性名不同的情况
 //
 if (true) {
   let {first: last} = {first: 100, middle: 200};
   // console.log(first); // Uncaught ReferenceError: first is not defined
   console.log(last);
 }

// 如果变量名与属性名不一致的话
// 必须以变量名（对象内必须有这个名）: 新变量名 的格式书写
 if (true) {
   let person = {name: "zhang", age: 40};
   let {name: className, age: classAge} = person;
   console.log(className, classAge);
 }

 function obj () {
   return {
     one: 10,
     two: 100,
     three: 1000
   }
 }
 let {two: new_b, one: new_a, three: new_c} = obj();
 console.log(new_a, new_b, new_c);
