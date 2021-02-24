/*
 * @Author: 柯军
 * @Date: 2019-08-18 14:19:45
 * @Description:
 */
const express = require('express')
const app = express()
const httpPort = 8000;

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express["static"]('./', { index: "index.html" }))

app.listen(httpPort, () => console.log(`Blog listening on port ${httpPort}!`))