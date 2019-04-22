// Loading modules
import bodyParser from 'body-parser'
import cors from 'cors'
import key from './config/keys'
import app from './app'
import router from './routers/router'

// Settings
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Routing the home endpoint
app.get('/', (req, res) => { res.json({ message: 'Welcome to the Blog API Gateway' }) })

// Setting the router
app.use(router)

const PORT = key.server.port

// Running app
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))