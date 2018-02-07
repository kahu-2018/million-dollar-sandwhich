const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/connection')
const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/api/pets', (req, res) => {
  db('pets')
    .join('species', 'pets.species_id', 'species.id')
    .then(pets => res.json(pets))
})

module.exports = server
