import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
    origin : "http://localhost:5173",
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions));

app.get("/api/jokes" , (req , res) =>{
    //create an array of jokes with id and title
    const jokes = [
        {id: 1 , title: "Why did the chicken cross the road? To get to the other side!"},
        {id: 2 , title: "Why did the scarecrow win an award? Because he was outstanding in his field!"}
    ]
    res.json(jokes)
})

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})