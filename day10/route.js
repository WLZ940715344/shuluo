function showindex(req,res){
  res.write(req.url)
  res.end('这是首页')
}
function showinfo(req,res){
  res.write(req.url)
  res.end('这是信息页')
}
function showerror(req,res){
  res.write(req.url)
  res.end('这是错误页面')
}

exports.showindex=showindex;
exports.showinfo=showinfo;
exports.showerror=showerror;