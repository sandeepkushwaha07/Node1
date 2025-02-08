//console.log("jai Mata di ");

//1. Import Area

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('jai mata di')
})

app.get('/sp', (req, res) => {
    res.send('i am a software developer')
  })

app.get('/s', (req, res) => {
    res.send('i sandeep am  software developer')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})