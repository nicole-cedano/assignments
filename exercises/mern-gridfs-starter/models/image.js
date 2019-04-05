const mongoose = require("mongoose")
const Schema = mongoose.Schema


const imageSchema = new Schema({
    img: {
        binData: {
            type: Buffer,
            data: String
        },
        // data: Buffer,
        contentType: String,
        path: {
            type: Buffer,
            data: String
        }
    
    }
})

module.exports = mongoose.model("image", imageSchema)


