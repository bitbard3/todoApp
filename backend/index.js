const express = require('express')
const app = express()
const { authRoutes } = require('./auth/routes')
const { todoRoutes } = require('./app/routes')


app.use(express.json())

app.use(authRoutes)
app.use(todoRoutes)

app.listen(3000)