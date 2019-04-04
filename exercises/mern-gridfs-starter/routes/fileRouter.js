const express = require('express')
const fileRouter = express.Router()
const multer = require('multer')
const mongoose = require('mongoose')
const storage = require("../server.js")
const {mongo} = mongoose.mongo()
const Grid = require('gridfs-stream')
const path = require("path")
Grid.mongo = mongo
const Image = require('../models/image.js')
const fs = require('fs')




// let upload = multer({storage: storage})

//post route
// fileRouter.post('/',multer({storage: {storage}}).single("file"), (req, res) => {
//     console.log("heeheha")
//     console.log(storage)
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     if(req.file){
//         console.log(success)       
//     }
//     return res.status(200).send(`File ${req.file.filename} has been uploaded!`)
// })
// var imgPath = require("../resources/pic.jpg")

fileRouter.post("/", (req,res, next) =>{
    let newImage = new Image
    // console.log(fs.readFileSync(imgPath))
    newImage.img.data = fs.readFileSync(path.resolve(__dirname, "../resources/pic.jpg"))
    newImage.img.path = "../resources/pic.jpg"
    newImage.contentType = "image/png"
    newImage.save((err, newImage)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newImage)

    })
})

fileRouter.get("/images/:_id", (req, res,next)=>{
    Image.find(image, (err, doc)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        let base64 = (doc[0].img.data.toString('base64'))
        console.log(base64)
        res.contentType(doc.img.contentType)
        return res.send(base64)
    })
})



module.exports = fileRouter