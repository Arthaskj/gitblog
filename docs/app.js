/*
 * @Author: 柯军
 * @Date: 2019-08-18 14:19:45
 * @Description:
 */
const express = require('express')
const app = express()
const httpPort = 8888;

app.use((req,res,next)=>{
  //后台对前端发发送过来的请求头，进行设置，允许他们跨域
  res.header({
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin':req.header.origin || '*',
      'Access-Control-Allow-Headers':'Content-Type',
      'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type':'application/json;charset=utf-8'
  })
})

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express["static"]('./', { index: "index.html" }))

app.listen(httpPort, () => console.log(`Blog listening on port ${httpPort}!`))