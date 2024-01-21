const express = require('express')
const app = express()
const { authRoutes } = require('./auth/routes')
const { todoRoutes } = require('./app/routes')
const cors = require('cors')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
});
app.use(express.json())

app.use(authRoutes)
app.use(todoRoutes)

app.listen(3000)
