var express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())

app.listen(port,function(){
    console.log("server is listen at port: " + port)
})
app.get('/',function(req,res){
    res.send("Hola desde express")
})

app.use('/api', api)