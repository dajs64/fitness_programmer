const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

exports.protect = asyncHandler(async (req, res, next) => {
  let token

  if(req.header.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(' ')[1]

      // verrify token 
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {

    }
  }
})

// module.exports = protect;
// bearer token