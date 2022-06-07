//Yonlendirme kodlarini iceriyor.
const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const CommentMain = require('../models/CommentMain')
const path = require('path')
const Category = require('../models/Category')


router.get('/',(req,res)=> {
    res.render('site/index')
})

router.get('/new',(req,res)=> {     //admin icin urun ekleme sayfasi
    if(!req.session.userID){
        res.redirect('/users/login')
    }
    Category.find({}).lean().then(categories=>{
        res.render('site/addproduct',{categories:categories})
    })
})

router.get('/:id',(req,res)=> {
    Product.findById(req.params.id).lean().then(product => {
        res.render('site/urundefault',{product,product})
    })
})


router.post('/test',(req,res)=> {

    let product_image = req.files.product_image

    product_image.mv(path.resolve(__dirname, '../public/images/Urunler', product_image.name))

    Product.create({
        ...req.body,
        product_image: `/images/Urunler/${product_image.name}`
    }, )

    req.session.sessionFlash = {
        type: 'alert alert-success',
        message : 'Ürün ekleme başarılı!'
    }
    
    res.redirect('/products')
})

module.exports = router   //router fonksiyonumuzu export ettik