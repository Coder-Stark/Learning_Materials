import React from 'react'
import useCustomHook from './useCustomHook'

function AppCustomHook() {
  const [count, Increment, Decrement] = useCustomHook(10);
  return (
    <>  
        <div>Count : {count}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default AppCustomHook