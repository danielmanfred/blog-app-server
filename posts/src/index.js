// Loading modules
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import key from './config/keys'
import app from './app'

// Conneting to the database
mongoose.Promise = global.Promise
mongoose.connect(key.mongodb.mlab, { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

// Settings
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
require('./post/post.route')(app)

// Routing the home endpoint
app.get('/', (req, res) => { res.json({ message: 'Welcome to the Blog Post Microservice' }) })

const PORT = key.server.port

// Running app
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))