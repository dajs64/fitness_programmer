const asyncHandler = require('express-async-handler')

//  Get workouts (hopefully specific users workouts)
// Get /api/workouts
// access Private 
const getWorkouts = asyncHandler (async (req, res) => {
  res.status(200).json({ message: 'Get workouts' })
})

// Set workout (hopefully specific users workouts)
// Post /api/workouts
// access Private 
const setWorkout = asyncHandler (async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Add a textfield')

  }
  res.status(200).json({ message: 'Set workout' })
})

// Update workout (hopefully specific users workouts)
// PUT /api/workouts/:id
// access Private 
const updateWorkout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update workout ${req.params.id}` })
})

// Delete workout (hopefully specific users workouts)
//  Delete /api/workouts/:id
// access Private 
const deleteWorkout = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Delete workout ${req.params.id}` })
})


module.exports = {
  getWorkouts, 
  setWorkout, 
  updateWorkout, 
  deleteWorkout, 
}