const express = require("express")
const app = express()
const PORT = process.env.PORT || 7000
const mongoose = require('mongoose')
const morgan = require('morgan')

// Middlewares
app.use(express.json()) //req.body
app.use(morgan('dev'))
// Routes
app.use("/todo", require('./routes/todoRoutes.js'))



// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser: true}, ()=>{
    console.log('Connected to the DB')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
