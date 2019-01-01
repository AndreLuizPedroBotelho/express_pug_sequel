const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/events')

module.exports = (req, res)=> {
    return  res.render('home/index',{
        title: "Home Page"
    });    
}