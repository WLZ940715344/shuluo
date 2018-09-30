// 引用a.js
var a=require('./02_a');
// 调用属性
console.log('module中调用a.js的属性'+a.a);
console.log('module中调用a.js的方法');
a.b();