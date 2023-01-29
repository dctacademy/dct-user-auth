const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user-authentication'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(err){
        console.log('error',err)
    })

module.exports = {
    mongoose 
}