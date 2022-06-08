const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name:{
    type: String,
    require: [true, 'Please add a name']
  },
  email:{
    type: String,
    require: [true, 'Please add an email'],
    unique: true
  },
  passwork:{
    type: String,
    require: [true, 'Please add password'],
  },
  name:{
    type: String,
    require: [true, 'Please add a name']
  },
},
{
  timestamp: true
})

module.exports = mongoose.model('User', userSchema)
