const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const SecretKey = "yash@23"
app.get("/",(req , resp) => {
    resp.json({
        message : "a simple api"
    })
})

app.post("/login" , (req , resp) => {
    const user = {
        id: 1,
        username : "Yash",
        email: "abc@test.com"
    }
    jwt.sign({user} , SecretKey , (error , token) => {
        resp.json({
            token
        })
    })
})

app.post("/profile" , VerifyToken, (req , resp) => {
    jwt.verify(req.token,SecretKey,(err , AuthData) => {
        if(err){
            resp.send({result: "invalid token"})
        }else{
            resp.json({
                message:"Profile Accessed",
                AuthData
            })
        }
    })
})
function VerifyToken(req , resp , next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token
        next()
    }else{
        resp.send({
            result: "Token is not valid"
        })
    }
}

app.listen(5000 , () => {
    console.log("app is running on 5000 port");
})