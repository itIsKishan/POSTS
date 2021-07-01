const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    name : {
        type : String,
        required : [true,'name is required']
    },
    description : {
        type : String,
        required : [true, 'description is required']
    },
    likes : {
        type : Number,
        default : 0
    },
    dislikes : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

// model
const Post = mongoose.model('Post',postSchema)

module.exports = Post