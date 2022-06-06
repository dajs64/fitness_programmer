const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5500

const app = express()

app.use('/api/workouts', require('./routes/workoutRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
