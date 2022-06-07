const mongoose = require('mongoose')

const CommentMainSchema = new mongoose.Schema({
    cmtitle: {type: String, required:true},
    cmcontent: {type:String,required:true},
    cmname: {type:String,required:true}
})

module.exports = mongoose.model('CommentMain', CommentMainSchema)