var express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.listen(port,function(){
    console.log("server is listen at port: " + port)
})
app.get('/',function(req,res){
    res.send("Hola desde express")
})
