var http = require('http');
var fs=require('fs');
var qs=require('querystring')
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  // localhost:4000打开form表单页面
  if(req.url=='/'){
    fs.readFile('./05_form.html',function(err,data){
      if(err){
        console.log(err);
        // res.end('加载页面失败');
        return;
      }
      // 读取成功，将读取的数据加载显示在页面上
      res.end(data);
    })
  }
  if(req.url=='/tijiao' && req.method.toLowerCase()=='post'){
    //因为NodeJs是单线程非I/O阻塞，为了追求效率，数据是一小段一小段上传的
    // 这样就会产生两种状态，正在接受，数据接收完成
    // 提前声明变量，用于保存每次得到的一小段的数据
    var allDate='';


    // data:正在接收的状态
    // chunk：表示每次接收到的一小段数据
    // addListener方法与on一样
    req.on('data',function(chunk){
      // 拼接每次得到的小段数据
      allDate+=chunk;
    });
    // end:表示接收完成的状态，当数据全部接收完毕，进入该状态
    req.addListener('end',function(){
      // 进入数据完成状态
      console.log(allDate);
      // 将字符串的参数，通过querysting模块转换为对象类型
      var obj=qs.parse(allDate);
      console.log(obj);
      res.end();//返回响应
    });
  }
});

server.listen(4000, 'localhost');