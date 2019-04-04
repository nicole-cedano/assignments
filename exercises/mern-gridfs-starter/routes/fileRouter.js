const express = require('express')
const fileRouter = express.Router()
const multer = require('multer')
const mongoose = require('mongoose')
const {mongo} = mongoose.mongo()
const storage = require("../server.js")
const Grid = require('gridfs-stream')
Grid.mongo = mongo




let upload = multer({storage: connectToDb()})

//post route
fileRouter.post('/',upload.single("file"), (req, res) => {
    console.log(storage)
    if(err){
        res.status(500)
        return next(err)
    }
    if(req.file){
        console.log(success)       
    }
    return res.status(200).send(`File ${req.file.filename} has been uploaded!`)
})



module.exports = fileRouter