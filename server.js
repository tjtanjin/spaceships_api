require('dotenv').config()
const https = require("https")
const fs = require("fs")

const options = {
  key: fs.readFileSync("/opt/lampp/etc/ssl.key/private.key"),
  cert: fs.readFileSync("/opt/lampp/etc/ssl.crt/certificate.crt")
};

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(cors())

const codeRouter = require('./routes/routes')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/api/v1', codeRouter)

https.createServer(options, app).listen(801);
