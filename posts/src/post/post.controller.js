import * as repository from './post.repository'

export const getAllPosts = async (req, res) => {
  try {
      const posts = await repository.getAllPosts()
      res.json({ posts })
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await repository.getPostById(req.params.id)
      res.json({ post })
  }   
  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const post = await repository.createPost(req.body)

    res.status(201).json({ 
      message: 'Post created successfully',
      post
    })
  }
  catch (err) {
    res.status(400).json({
      message: 'Failed to create post',
      error: err.message
    })
  }
}

export const updatePost = async (req, res) => {
  try {
    await repository.updatePost(req.params.id, req.body)
    res.json({ message: 'Post updated successfully' })
  }
  catch (err) {
    res.status(400).json({
      message: 'Failed to update the post',
      error: err.message
    })
  }
}

export const removePost = async (req, res) => {
  try {
    await repository.removePost(req.params.id)
    res.json({ message: 'Post deleted successfully' })
  }
  catch (err) {
    res.status(400).json({ 
      message: 'Failed to delete the post',
      error: err.message
    })
  }
}
