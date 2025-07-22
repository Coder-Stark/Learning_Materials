// console.log("Chair or code")
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello world");
})

app.get('/login', (req, res)=>{
    res.send("Login Page")
})

let data = {
    "name": "Shivam",
    "Proff": "Software Engineer"
}
app.get('/json', (req, res)=>{
    res.json(data);
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is Running on PORT : ${port}`)
})