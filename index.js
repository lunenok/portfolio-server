const express = require('express')
const path = require('path')
const app = express()
const httpsPort = 3001
const httpPort = 3002
const https = require('https')
const fs = require('fs')

const privateKey = fs.readFileSync(path.join(__dirname, 'ssl', 'ca-key.pem'))
const cert = fs.readFileSync(path.join(__dirname, 'ssl', 'ca-cert.pem'))
const httpsOptions = {key: privateKey, cert: cert}

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

var httpsServer = https.createServer(httpsOptions, app)
httpsServer.listen(httpsPort)
app.listen(httpPort)