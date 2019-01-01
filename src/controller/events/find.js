const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res)=> {
    Event
        .findAll()
        .then((events)=>{
            return res.render('event/index',{
                title: 'List all Event',
                msg: 'All Events',
                events
            })
        })
        .catch((err)=>console.log(err))

   
}