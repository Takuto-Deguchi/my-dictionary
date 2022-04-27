//import knex from '../database/main'
import express from 'express'
const router = express.Router()
const User = require('../DB/models').User

// router.post('/measuredData', async (req, res, next) => {
//   try {
//     await knex('measure_data').insert([{
//       device_id: req.body.MAC,
//       temperature: req.body.temperature_value,
//       humidity: req.body.humidity_value,
//       brightness_level: req.body.bright_value,
//     }])
//     //res.send('Hello ESP32 World!' + Math.floor(Date.now() / 1000))
//     res.status(200).end()
//   } catch (err) {
//     res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
//   }
// })

// router.post('/deviceName', async(req, res, next) => {
//   try {
//     await knex('devices').where('id', '=', req.body.MAC).update({name: req.body.Name, update_at: knex.fn.now()})
//     res.status(200).end()
//   } catch (err) {
//     res.status(400).end()
//   }
// })

router.get('/dbtest', async (req, res, next) => {
  try {
    User.findAll().then((users) => {
      res.send(users)
    })
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || 'Unknown Error' })
  }
})

module.exports = router
