const express = require('express')
const app = express()
const port = 3000

//Router configuration
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Server configuration
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})