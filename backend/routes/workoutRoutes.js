const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get workouts' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set workout' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update workout ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete workout ${req.params.id}` })
})

module.exports = router
