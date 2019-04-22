import Post from './post.model'

export const getAllPosts = () => Post.find()

export const getPostById = id => Post.findById({ _id: id })

export const createPost = data => (new Post(data)).save()

export const updatePost = (id, data) => Post.updateOne({ _id: id }, { $set: data })

export const removePost = id => Post.deleteOne({ _id: id })
