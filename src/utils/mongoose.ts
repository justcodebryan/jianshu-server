import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost/jianshu_db')
    console.log('[mongo]: Connected to MongoDB')
  } catch (err) {
    console.error('[mongo]: Error connecting to MongoDB:', err)
  }
}

export default connect
