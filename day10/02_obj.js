// 引入student类
var Stu=require('./Student');

// 创建对象
var s1=new Stu('张三',23)
console.log('属性'+s1.name+','+s1.age);
s1.Study();
s1.sayHi(); 