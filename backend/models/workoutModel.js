const mongoose = require('mongoose') 

const workoutSchema = mongoose.Schema(
  {
  //  user: {
  //    type: mongoose.Schema.Types.ObjectId,
  //    required: true,
  //    ref: 'User',
  //  }, 
   name: {
     type: String,
     required: [true, 'Please add a text value']
   },
   type: {
    type: String,
    required: [true, 'Please add a text value']
  },
  duration: {
    type: String,
    required: [true, 'Please add a text value']
  },
  difficulty: {
    type: String,
    required: [true, 'Please add a text value']
  },
  location: {
    type: String,
    required: [true, 'Please add a text value']
  },
}, 
{
  timestamps: true
}
)

module.exports = mongoose.model('Workout', workoutSchema)