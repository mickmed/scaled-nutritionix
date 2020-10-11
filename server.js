const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const recipesRoutes = require('./routes/recipes')
const productsRoutes = require('./routes/products')

const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', productsRoutes)
app.use('/api', recipesRoutes)



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))