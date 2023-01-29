const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/user-authentication'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(err){
        console.log('error',err)
    })

module.exports = {
    mongoose 
}
