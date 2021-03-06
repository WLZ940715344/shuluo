// 1  引入http
var http=require('http');
// 引入fs模块
var fs=require('fs');
// 2.创建服务
var server=http.createServer(function(req,res){
  /*
    因为NodeJs没有根目录，所以无法通过localhost:8080/02_root.html；来访问该文件中的内容，可以使用fs模块来实现这个功能
  */
  //使用fs来读取02_root.html的内容，并将读取到的数据作为响应内容，返回给页面
  fs.readFile('./02_root.html',function(err,data){
    if(err){
      // 读取路径出错了
      console.log(err);//打印错误信息
      res.end('read file error!');//返回信息
    }else{
      console.log(data.toString());//查看data
      res.end(data);//返回读取的数据
    }
  })
});
// 3.开启服务器监听
server.listen(8080,'localhost');