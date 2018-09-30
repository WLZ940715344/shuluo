var fs=require('fs');
var start=new Date();
// console.log('1')
// fs.readFile('./day09.txt','utf-8',function(error,data){
//   console.log('2')
//   if(error){
//     console.log(error)
//   }else{
//     console.log(data)
//   }
// })
// console.log('3');
var result=fs.readFileSync('./day09.txt');
var end=new Date;
console.log("程序执行一次："+(end-start)+'ms')
// 同步的读取文件