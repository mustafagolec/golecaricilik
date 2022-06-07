const express = require('express')
const router = express.Router()
const Category = require('../../models/Category')
const Product = require('../../models/Product')

router.get('/',(req,res)=> {
    res.render('admin/index')
})

router.get('/categories',(req,res)=> {
    Category.find({}).lean().then(categories => {
        res.render('admin/categories' , {categories:categories})
    })
})

router.get('/products',(req,res)=> {
    Product.find().lean().then(products=>{
            res.render('admin/products',{products:products})
        })
    })

router.post('/categories',(req,res)=> {
    Category.create(req.body, (error,category)=>{
        res.redirect('categories')
    })
})

router.delete('/categories/:_id',(req,res)=> {
    Category.deleteOne({_id : req.params._id}).then(()=>{
        res.redirect('/admin/categories')
    })
   
})

router.delete('/products/:_id',(req,res)=> {
    Product.deleteOne({_id : req.params._id}).then(()=>{
        res.redirect('/admin/products')
    })
})

router.get('/products/editproduct/:_id',(req,res)=> {
    Product.findById(_id).lean().then(products=>{
            Category.find({}).lean().then(categories => {
                res.render('/editproduct', {products:products,categories:categories})
                
            })
        })
        console.log("ERROR")
    })



module.exports = router