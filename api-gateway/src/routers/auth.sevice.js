import express from 'express'
import apiAdapter from './adapter'

const router = express.Router()

// Base URL assignment
const BASE_URL = 'http://localhost:4001'
const api = apiAdapter(BASE_URL)

// Login route
router.post('/auth/signin', (req, res) => {
  api.post(req.path, req.body)
    .then(resp => {
      console.log('RESP: ', resp.data)
      res.send(resp.data)
    }) 
})

export default router