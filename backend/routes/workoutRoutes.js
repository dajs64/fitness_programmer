const express = require('express')
const router = express.Router()
const { 
  getWorkouts, 
  setWorkout, 
  updateWorkout, 
  deleteWorkout, 
} = require('../controllers/workoutController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getWorkouts)
router.route('/').post(protect, setWorkout)
router.route('/:id').put(protect, updateWorkout)
router.route('/:id').delete(protect, deleteWorkout)


module.exports = router
