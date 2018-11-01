let http = require('http');
//node的服务器模块
let fs = require('fs');
//fs node的文件模块
let url = require('url')
//请求路径和数据解析

//引入轮播图数据
let sliders = require('./slider');

//readFile 读取文件 
// 读取文件 异步操作
 function read(cb) {
   fs.readFile('./good.json','utf8', (err,data)=>{
      if (err || data.length == 0) {
            cb([]) //如果有错误 或者文件没长度就是空数组
        } else {
            cb(JSON.parse(data)) //将读出来的内容转化为对象
        }
  })  
 }
//writeFile 写入文件
http.createServer((req,res)=>{
//req request 请求 
//res response 响应
   res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1')
    if (res.method == 'OPTIONS') return res.end('200')
  let {pathname,query}=url.parse(req.url,true) 
    // 3000/slider 
    // path 请求的路径
    if(pathname ==='/slider'){
     res.setHeader('content-type', 'application/json;charset=utf8');
     return res.end(JSON.stringify(sliders))
    } 
    // 'http://localhost:5000/hot'
    if(pathname ==='/hot'){
     res.setHeader('content-type', 'application/json;charset=utf8');
       read(function(goods) {
           let hotGood = goods.reverse().slice(0, 6);
        res.end(JSON.stringify(hotGood))   
      })
     return 
    }  
     if(pathname ==='/alllist'){
     res.setHeader('content-type', 'application/json;charset=utf8');
      let id = parseInt(query.id);
      if (id) {
            read(goods=>{
              let good = goods.find(
                item=>item.id===id
                )
              res.end(JSON.stringify(good))
            })
      }
      else{
           read(function(goods) {
          res.end(JSON.stringify(goods))   
        })
      }
     return 
    }  
    //  if(pathname ==='/alllist'){
    //  res.setHeader('content-type', 'application/json;charset=utf8');
    //    read(function(goods) {
    //     res.end(JSON.stringify(goods))   
    //   })
    //  return 
    // }  

}).listen(3006)
//listen 后面是端口号 