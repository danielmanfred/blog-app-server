import express from 'express'
import * as controller from './../controllers/auth'
import * as service from './../services/auth'

const router = express.Router()

router.get('/decodeToken', service.decodeToken)
router.post('/signin', controller.signin)

module.exports = app => app.use('/auth', router)
