const express = require('express')
const { mongoose } = require('./config/database')
const cors = require('cors')

const { usersRouter } = require('./app/controllers/UsersController')
const router = require('./config/routes')

const app = express() 
const port = process.env.PORT || 3005 

app.use(express.json())
app.use(cors())

app.use('/', router)
app.use('/users', usersRouter)


app.listen(port, function(){
    console.log('listening on port', port)
})