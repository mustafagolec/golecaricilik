const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const methodOverride = require('method-override')


mongoose.connect('mongodb://127.0.0.1/aricilikdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoStore = connectMongo(expressSession)

app.use(expressSession({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection })
}))

app.use((req, res, next) => {
    res.locals.sessionFlash = req.session.sessionFlash
    delete req.session.sessionFlash
    next()
})

app.use(fileUpload())

app.use(express.static('public'))
app.use(methodOverride('_method'))

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const main = require('./routes/main')
const products = require('./routes/products');
const moment = require('moment');

app.use((req,res,next) => {
    if(req.session.userID){
        res.locals = {
            displayLink : true
        }
    }
    else{
        res.locals = {
            displayLink: false
        }
    }
    next()
})

const users = require('./routes/users');
const admin = require('./routes/admin/index');
const MongoStore = require('connect-mongo');

app.use('/', main)
app.use('/products', products)
app.use('/users', users)
app.use('/admin',admin)

app.listen(port, hostname, () => {
    console.log(`SERVER ÇALIŞIYOR , http://${hostname}:${port}/`)
})

