//Yonlendirme kodlarini iceriyor.
const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const CommentMain = require('../models/CommentMain')
const User = require('../models/User')
const Category = require('../models/Category')

router.get('/',(req,res)=> {
    console.log(req.session)
    CommentMain.find().lean().then(CommentMain=>{
        Product.find().lean().then(products=>{
            res.render('site/index',{products:products,CommentMain:CommentMain})   //Ana sayfadaki ürünler ve yorumlar görünmesi için
        })
    })
   
})

router.delete('/:_id',(req,res)=>{
    CommentMain.deleteOne({_id : req.params._id}).then(()=>{
        res.redirect('/index')
    })
})

router.get('/aricilik',(req,res)=> {
    res.render('site/aricilik')
})

router.get('/dilekoneri',(req,res)=> {
    res.render('site/dilekoneri')
})

router.get('/hakkimizda',(req,res)=> {
    res.render('site/hakkimizda')
})

router.get('/iletisim',(req,res)=> {
    res.render('site/iletisim')
})

router.get('/index',(req,res)=> {
    CommentMain.find().lean().then(CommentMain=>{
        Product.find().lean().then(products=>{
            res.render('site/index',{products:products,CommentMain:CommentMain})
        })
    })
})


router.get('/passwordReset',(req,res)=> {
    res.render('site/passwordReset')
})

router.get('/sepet',(req,res)=> {
    res.render('site/sepet')
})

router.get('/urunDefault',(req,res)=> {
    res.render('site/urunDefault')
})

router.get('/admin/index',(req,res)=> {
    res.render('admin/index')
})

router.get('/products',(req,res)=> {

    Product.find().lean().then(products=>{
        Category.find().lean().then(categories=>{
            res.render('site/products',{categories:categories,products:products})
        })
    })
    

    //res.render('site/urunler')
})



router.post('/addcomment',(req,res)=> {
    const CommentMains = new CommentMain(req.body)

    CommentMains.save().then((result)=>{
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router   //router fonksiyonumuzu export ettik