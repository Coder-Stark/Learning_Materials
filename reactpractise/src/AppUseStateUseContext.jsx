import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    console.log("Use Effect is called");
  },[count2])                                //useEffect only called when count2 is updated
  return (
    <>
      <div>React App</div>
      <div>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>

      <div>{count2}</div>
      <button onClick={()=>{setCount2(count2+1)}}>Increment</button>
      <button onClick={()=>{setCount2(count2-1)}}>Decrement</button>

    </>
  )
}

export default App