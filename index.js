const express = require('express')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.send('Hello World! From Yumi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})