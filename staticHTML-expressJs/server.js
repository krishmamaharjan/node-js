// serve static html page with/ without using express JS


const express = require('express')
const app = express()
const router = express.Router()
const path= require('path')

router.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, "index.html"))
    // console.log('hello from /')
    // res.end()
})

// router.get('/about', function(req,res,next){
//     console.log('from about page')
//     res.end()
// })

app.use(router)


app.listen(8000, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('server run on port 8000')
    }
})