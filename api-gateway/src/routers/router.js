import express from 'express'
import authService from './auth.sevice'
import userService from './user.service'
import postService from './post.service'

const router = express.Router()

// Setting microservices router
router.use(authService)
router.use(userService)
router.use(postService)

export default router