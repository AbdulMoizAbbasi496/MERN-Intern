// Cookies and JWT
const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const PORT = process.env.PORT || 3000
const SECRET_KEY = process.env.SECRET_KEY // for jwt

const app = express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    let token = jwt.sign({name : "Abdul Moiz Abbasi", email : "moiz45573@gmail.com"},SECRET_KEY)
    console.log("TOKEN : ",token);    
    res.cookie('token',token)
    res.send('DONE')
})
app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,SECRET_KEY) 
    console.log("DATA : ",data);
    res.json(data)
})
app.get('/setpass',(req,res)=>{
    bcrypt.genSalt(10, function(err,salt){
        console.log("SALT : ",salt);
        bcrypt.hash('mypass',salt,function(err,hash){
            // Store hash is DB
            console.log("HASH : ",hash);            
        })        
    })
    res.send('DONE')
})
app.get('/checkpass',(req,res)=>{
    bcrypt.compare("mypass","$2b$10$P7/kEjwbVgQ7FIc/srk5Uu5EI0IOJlhhkKqXmtM7rRdKxBV/T.Upu",function(err,result){
        console.log("RESULT : ",result);        
    })
    res.send("DONE")
})
app.listen(PORT,()=>{
    console.log(`URL : http://localhost:${PORT}`);
}) 