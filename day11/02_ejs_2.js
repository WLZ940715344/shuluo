// 1/
var ejs=require('ejs');
// 2
var str='这是一个数组：<%=stus[0].name %>';

var data={names:['jack','rose','lily']};
var stus={stus:[
  {name:'js'},
  {name:'jsds'},
  {name:'sdfw'},
]};

var html=ejs.render(str,stus);
console.log(html);