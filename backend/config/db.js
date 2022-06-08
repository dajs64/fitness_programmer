const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://devin1234:devin1234@devincluster.nodw3ag.mongodb.net/mernapp?retryWrites=true&w=majority")

    console.log(`MOngoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}


module.exports = connectDB