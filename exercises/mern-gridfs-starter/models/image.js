const mongoose = require("mongoose")
const Schema = mongoose.Schema


const imageSchema = new Schema({
    img: {
        binData: {
            type: Buffer,
            data: String
        },
        contentType: String,
        path: {
            type: Buffer
        }
    
    }
})

module.exports = mongoose.model("image", imageSchema)


