require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/users')
const groupRoutes = require('./routes/groups')
const emailRoutes = require('./routes/email')
//express app
const app = express()


//middleware
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/users', userRoutes)
app.use('/api/groups', groupRoutes)
app.use('/api/email', emailRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


    