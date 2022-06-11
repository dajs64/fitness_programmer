const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')

const Workout = require('../models/workoutModel')
const User = require('../models/userModel')

//  Get workouts (hopefully specific users workouts)
// Get /api/workouts
// access Private 
const getWorkouts = asyncHandler (async (req, res) => {
  const workouts = await Workout.find({})

  res.status(200).json(workouts)
})

// Set workout (hopefully specific users workouts)
// Post /api/workouts
// access Private 
const setWorkout = asyncHandler (async (req, res) => {
  if(!req.body) {
    console.log("HERE",req.body)
    res.status(400)
    // throw new Error('Add a textfield')


  }

  const workout = await Workout.create({
  name: req.body.name,
  type: req.body.type,
  duration: req.body.duration,
  style: req.body.style,
  difficulty: req.body.difficulty,
  location: req.body.location,
  // user: req.user._id,
})

  res.status(200).json(workout)
})
const getWorkout = asyncHandler (async (req, res) => {
  const workout = await Workout.findById(req.params.id)

  // check for workout??
  if(!workout) {
    res.status(400)
    throw new Error ('Workout not found')
  }

   // Check for user
  //  if (!req.user) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }
  res.status(200).json(workout)
})

// Update workout (hopefully specific users workouts)
// PUT /api/workouts/:id
// access Private 
const updateWorkout = asyncHandler (async (req, res) => {
  const workout = await Workout.findById(req.params.id)

  // check for workout??
  if(!workout) {
    res.status(400)
    throw new Error ('Workout not found')
  }

   // Check for user
   if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
})

  // const updatedWorkout = Workout.findByIdAndUpdate(req.params.id, req.body, {new: true,
  // })
  // res.status(200).json(updateWorkout)


// Delete workout (hopefully specific users workouts)
//  Delete /api/workouts/:id
// access Private 
const deleteWorkout = asyncHandler (async (req, res) => {
  const workout = await Workout.findById(req.params.id)

  if(!workout) {
    res.status(400)
    throw new Error ('Workout not found')
  }

  await globalAgent.remove()

  res.status(200).json({ id: req.params.id })
})

// const generateToken = (id) => {
//   return jwt 
// }


module.exports = {
  getWorkouts, 
  setWorkout, 
  updateWorkout, 
  deleteWorkout, 
  getWorkout,

}