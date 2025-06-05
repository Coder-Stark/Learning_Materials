import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosTut() {
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res);
        setUserData(res.data);
    })
  },[])
  
  return (
    <>
        {
          userData.map((x)=><h1>{x.name}</h1>)
        }
    </>    
  )
}

export default AxiosTut