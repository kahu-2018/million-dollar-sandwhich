const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./api')

const server = express()

// middleware
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// routes
server.use('/api', apiRoutes)

// wildcard route
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
