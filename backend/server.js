const express = require('express')
require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const workoutRoutes = require('./routes/workoutRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use (cors())
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
