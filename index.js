const express = require('express')
const path = require('path')
const app = express()
const port = 3001
const https = require('https')
const fs = require('fs')

const privateKey = fs.readFileSync('./ssl/server.key', 'utf-8')
const cert = fs.readFileSync('./ssl/server.crt', 'utf-8')
const httpsOptions = {privateKey: privateKey, cert: cert}

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

var httpsServer = https.createServer(httpsOptions, app)
httpsServer.listen(port)

