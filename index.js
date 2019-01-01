const express = require('express')
const bodyParser = require('body-parser')
const methodOveride = require('body-parser')
const morgan = require('body-parser')
const path = require('path');
const Sequelize = require('sequelize')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());
app.use(methodOveride('_method'))

//Configuração Sequilize
//const sequelize = new Sequelize('mysql://root:@localhost:3306/sequelize')
const sequelize = new Sequelize('sequelize','root','',{
    host : 'localhost',
    dialect: 'mysql',
    operatorAliases: Sequelize.Op
    /*pool:{
        max:
        min:
        acquire:
        idle
    }*/
})

sequelize
    .authenticate()
    .then(() => console.log('OK!'))
    .catch(() => console.log('ERROR!'))

app.set('view engine','pug');
app.set('views', path.join(__dirname,'src/view'))

require('./src/index')(app)

app.listen(3000, ()=>{
    console.log('NodeJS Started')
})