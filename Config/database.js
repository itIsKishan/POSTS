const mongoose = require('mongoose')

const configureDb = () =>{
    mongoose.connect('mongodb://localhost:27017/post2021',{
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useFindAndModify : false
    })
    .then(() =>{
        console.log('database is connected no worries!!!')
    })
    .catch(() =>{
        console.log('error occured in connecting database')
    })
}

module.exports = configureDb