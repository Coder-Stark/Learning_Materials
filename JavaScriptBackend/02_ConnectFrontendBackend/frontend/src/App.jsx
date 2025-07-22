import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
      <h1>Chai and FullStack</h1>
      <h2>Total JokesJokes : {jokes.length}</h2>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
