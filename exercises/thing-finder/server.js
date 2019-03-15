const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const PORT = process.env.PORT || 5800

// middleware
app.use(express.json())

// routes
app.use("/things",require('./routes/things.js'))

app.listen(5800, () => {
    console.log(`Server is running on ${PORT}`)
})