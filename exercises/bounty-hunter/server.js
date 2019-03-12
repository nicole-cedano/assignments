const express = require('express')
const app = express()



//middleware
app.use(express.json())

// Routes
app.use("/bounty", require("./routes/bounty.js"))








app.listen(6000, () => {
    console.log("Server is running on port 6000")
})