var fs = require("fs");
fs.readdir("./a",function(err,files){
  if(err){
    console.log(err);
    return;
  }
  console.log(files);
  //递归
  var wenjian=''; 
  var wenjianjia='';
  (function a(i){
    //先判断递归结束的条件
   if(i==files.length){//当i与数组长度一样，说明遍历结束了
    console.log("文件:"+wenjian);
    console.log("文件夹:"+wenjianjia);
    return;
   }
   //遍历没有结束  检查判断每一个元素的状态
   fs.stat("./a/"+files[i],function(err,stats){
     if(err){
      console.log(err);
      return;
     }
     if(stats.isFile()){
       wenjian+= files[i]+',';
     }else{
      wenjianjia+=files[i]+',';

     }
     a(++i);
   });
  })(0)
});
