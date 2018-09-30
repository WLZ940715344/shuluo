var app= require('./route');
var http = require('http');
http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
  if(req.url=='/'){
    app.showindex(req,res)
  }else if(req.url=='/info'){
    app.showinfo(req,res)
  }else{
    app.showerror(req,res)
  }
}).listen(4000, 'localhost');