const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    return res.json({message: 'Hey I am nodejs in container'})
})

app.listen(port, ()=>{
    console.log(`Server is Running on PORT: ${port}`);
})