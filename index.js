const express = require('express')
const bodyParser = require('body-parser')
const methodOveride = require('body-parser')
const morgan = require('body-parser')
const path = require('path');

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());
app.use(methodOveride('_method'))

app.set('view engine','pug');
app.set('views', path.join(__dirname,'src/view'))

require('./src/model/index')
require('./src/index')(app)

app.listen(3000, ()=>{
    console.log('NodeJS Started')
})