import express from 'express'
import apiAdapter from './adapter'

const router = express.Router()

// Base URL assignment
const BASE_URL = 'http://localhost:4002'
const api = apiAdapter(BASE_URL)

// Get all posts route
router.get('/posts', (req, res) => {
  api.get(req.path).then(resp => res.send(resp.data))
})

// Get post by id route
router.get('/posts/:id', (req, res) => {
  api.get(req.path).then(resp => res.send(resp.data))
})

// Create post route
router.post('/posts', (req, res) => {
  api.post(req.path, req.body).then(resp => res.send(resp.data))
})

// Update post route
router.put('/posts/:id', (req, res) => {
  api.put(req.path, req.body).then(resp => res.send(resp.data))
})

// Remove post route
router.delete('/posts/:id', (req, res) => {
  api.delete(req.path).then(resp => res.send(resp.data))
})

export default router