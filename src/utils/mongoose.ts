import mongoose from 'mongoose'

const connect = async () => {
  try {
    mongoose.connect('mongodb://localhost/mydatabase', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  }
}

module.exports = { connect }
