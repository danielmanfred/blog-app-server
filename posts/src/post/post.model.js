import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String, // Image URL
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Post', postSchema)