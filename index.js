const express = require('express')
const configureDb = require('./Config/database')
const router = require('./Config/route')
const app = express()
const port = 3077

// setup the database
configureDb()

app.use(express.json())
app.use(router)

app.listen(port,() =>{
    console.log('i am listening the request')
})