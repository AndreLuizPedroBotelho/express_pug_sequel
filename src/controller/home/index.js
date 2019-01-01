module.exports = (router) => {
    router.get('/', require('./home'))
    return router;
}

