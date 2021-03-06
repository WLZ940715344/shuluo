var http = require('http');
var fs=require('fs');
var ejs=require('ejs');
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{'content-type':'text/html','charset':'utf-8'})
  fs.readFile('./02_ejs_3.html',function(err,data){
    if(err){
      console.log(err);
      res.end('加载出错');
      return
    }
      // res.end(data)
      // 模拟一个数据
      // var info={msg:'来自服务器的信息'}
      // 模拟数组
      // var info={msg:[1,2,3,5]}
      // 对象
      var info={msg:{id:101,name:'jack'}}
      // 对象数组
      var info={msg:[{id:101,name:'jack'},{id:102,name:'rose'}]}
      // 将数据使用ejs(填充/渲染)到模板中
      var html=ejs.render(data.toString(),info);
      // 将渲染后的结果返回给页面
      res.end(html)
  })
});
server.listen(4000, 'localhost');