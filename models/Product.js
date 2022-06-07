const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    content: {type:String,required:true},
    price: {type:String,required:true},
    category: {type: Schema.Types.ObjectId, ref:'categories'},
    product_image: {type: String, required:true},
    starcount: {type:String,required:true},          //Suanda calismiyor, yildizlarimiz span objesi oldugu icin. ileride bakilacak
    reviewamount: {type:String,required:true},
    stockamount: {type:String,required:true},
    weightamount: {type:String,required:true},
    soldamount: {type:String,required:true}
})

module.exports = mongoose.model('Product', ProductSchema)