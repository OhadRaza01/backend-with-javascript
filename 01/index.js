
// get request
const express = require("express")

const app = express() //express ki saari power app mai agyi 

const port = 3000

app.get("/" , (req , res)=>{
    res.send("Hello world");
})

app.get("/signup" , (req , res)=>{
    res.send("on signup page")
})

app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})