import express from 'express'
import apiAdapter from './adapter'

const router = express.Router()

const BASE_URL = 'http://localhost:4001'
const api = apiAdapter(BASE_URL)

// Get all users route
router.get('/users', (req, res) => {
  api.get(req.path).then(resp => res.send(resp.data))
})

// Get user by id route
router.get('/users/:id', (req, res) => {
  api.get(req.path).then(resp => res.send(resp.data))
})

// Create user route
router.post('/users', (req, res) => {
  api.post(req.path, req.body).then(resp => res.send(resp.data))
})

// Update user route
router.put('/users/:id', (req, res) => {
  api.put(req.path, req.body).then(resp => res.send(resp.data))
})

// Remove user route
router.delete('/users/:id', (req, res) => {
  api.delete(req.path).then(resp => res.send(resp.data))
})

export default router