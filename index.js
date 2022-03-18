const express = require('express')
const path = require('path')
const app = express()
const port = 3001
const https = require('https')
const fs = require('fs')
const httpsOptions = {
    key: fs.readFileSync("server.key"),
    cert:fs.readFileSync("server.cert")
}

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

https.createServer(httpsOptions, app)
app.listen(port)
