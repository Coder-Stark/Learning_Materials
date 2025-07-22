import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const jokes = [
    {
        id: 1,
        title: 'Joke 1',
        content: "This is Joke 1"
    },
    {
        id: 2,
        title: 'Joke 2',
        content: "This is Joke 2"
    },
    {
        id: 3,
        title: 'Joke 3',
        content: "This is Joke 3"
    },
    {
        id: 4,
        title: 'Joke 4',
        content: "This is Joke 4"
    },
    {
        id: 5,
        title: 'Joke 5',
        content: "This is Joke 5"
    },
]

app.get('/api/jokes', (req, res)=>{
    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is Running on PORT : ${port}`);
})