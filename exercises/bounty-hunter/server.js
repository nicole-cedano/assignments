const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')




//middleware
app.use(express.json())
app.use(morgan('dev'))


// DB connection
mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    console.log("Connected to the DB")
})


// Routes
app.use("/bounty", require("./routes/bountyRoutes.js"))

//Global Error Handler
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errorMsg: err.message})
})



app.listen(6000, () => {
    console.log("Server is running on port 6000")
})