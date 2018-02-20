const express = require('express')
const router = express.Router()
// do I need body parser?
const db = require('./db/connection')

// router.get('/ingredients', (req, res)=> {
//   db.getIngredients()
//   .then(ingredients => {
//     res.json({ingredients})
//   })
//   .catch(err=> {
//     res.status(500).send('DATABASE_ERROR: ' + err.message)
//   })
// })
