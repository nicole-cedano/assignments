const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


// db connection
mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    
})


//middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/bounty", require("./routes/bountyRoutes.js"))





app.listen(6000, () => {
    console.log("Server is running on port 6000")
})