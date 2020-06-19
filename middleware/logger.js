// an example for creating your onw middleware 
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`);
    next()
}

module.exports = logger;