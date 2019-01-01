module.exports = (req, res)=> {
    return  res.render('home/index',{
        title: "Home Page",
        msg: 'Welcome to Events app'
    });    
}