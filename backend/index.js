const express = require('express')
const app = express()
const { authRoutes } = require('./auth/routes')
const { todoRoutes } = require('./app/routes')
const cors = require('cors')

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())
app.get('/', (req, res) => {
    res.send(process.env.CLIENT_URL)
})
app.use(authRoutes)
app.use(todoRoutes)

app.listen(3000)
