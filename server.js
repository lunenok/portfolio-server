const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3002
const path = require('path')

app.get('/', (req, res) => {
  res.send('WORKING!')
})

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, './ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './ssl/cert.pem'))
}

const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})