const express = require('express')
const app = express()
const config = require("./config")
const mongoose = require('mongoose')
// const multer = require('multer')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000
const gfs = require('multer-gridfs-storage')

//middleware
app.use(express.json())
app.use(morgan('dev'))

// let connection
// let storage
//conection to my db
mongoose.connect(config.db, { useNewUrlParser: true }, (res) => {
    console.log("[+] Connected to the DB ")
    connection = require('mongoose').connection
    // console.log(connection.db)
    const storage = new gfs({
        db: connection.db,
        file: (req, file) => {
            return {
                filename: "file_" + Date.now()
            }
        }
    })
})

// async function connectToDb(){
//     let connection
//     try{
//         connection = await mongoose.connect("mongodb://localhost:27017/grid-fs", { useNewUrlParser: true })
//     }
//     catch(err){
//         console.log(err)
//     }
//     console.log("[+] Connected to the DB ")
//     // console.log(connection)
//     connection = require('mongoose').connection
//     console.log(connection.db)
//     let storage = new gfs({
//         db: connection.db,
//         file: (req, file) => {
//             return {
//                 filename: "file_" + Date.now()
//             }
//         }
//     })
//     console.log(storage)
//     return storage

//}

// const storage = connectToDb()
// module.exports = connectToDb()



// setting up storage
// const storage = new gfs({
//     db: connection.db,
//     file: (req, file) => {
//         return {
//         filename: 
//         file.originalname
//         }
//     }
// })


// routes
app.use('/files', require('./routes/fileRouter.js'))

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

//Server Connection/Listen
app.listen(PORT, () => {
    console.log(`[o] Server is running on Port ${PORT}`)
})
