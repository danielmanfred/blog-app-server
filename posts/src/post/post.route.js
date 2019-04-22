import express from 'express'
import * as controller from './post.controller'

const router = express.Router()

router.get('/', controller.getAllPosts)
router.get('/:id', controller.getPostById)
router.post('/', controller.createPost)
router.put('/:id', controller.updatePost)
router.delete('/:id', controller.removePost)

module.exports = app => app.use('/posts', router)