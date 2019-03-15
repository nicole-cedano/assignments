const express = require('express')
const app = express()
const morgan = require('morgan')

//middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/bounty", require("./routes/bounty.js"))




app.listen(6000, () => {
    console.log("Server is running on port 6000")
})