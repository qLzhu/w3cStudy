/**
 * 栈区（栈内存）与堆区（堆内存）
 *
 * 基本类型保存在内存的栈区，因为基本类型的值是固定的
 *
 * 引用类型的值保存在内存的堆区，因为引用类型的值无法确定其数值要占有多少内存，所以保存在堆区
 * 并且引用类型是引用数值存放的位置，所以当修改数值时，所以引用的这个数值的对象都会跟着改变
 */


var yes = "This is yes";
var no  = yes;

console.log(yes);  // This is yes
console.log(no);   // This is yes

no = "This is no";
console.log(yes);  // This is yes
console.log(no);   // This is no



var yesObj = {
	name: "This is yesObj name"
}
var noObj = yesObj;

console.log(yesObj.name); // This is yesObj name
console.log(noObj.name);  // This is yesObj name

// 修改数值
noObj.name = "This is noObj name";
console.log(yesObj.name); // This is noObj name
console.log(noObj.name);  // This is noObj name


var name = 100;
console.log(name);