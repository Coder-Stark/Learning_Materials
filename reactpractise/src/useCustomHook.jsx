import { useState } from 'react'

function useCustomHook(initialVal = 0) {
  const [count, setCount] = useState(initialVal);
  
  function Increment(){
    setCount(count + 1);
  }
  function Decrement(){
    setCount(count - 1);
  }
  return [count, Increment, Decrement];
}

export default useCustomHook