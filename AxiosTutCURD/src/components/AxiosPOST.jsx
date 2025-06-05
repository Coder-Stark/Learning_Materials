import axios from 'axios';
import React, { useState } from 'react'

function AxiosPOST() {
  const data = {
    frname : "",
    laname : ""
  }

  const [inputData, setInputData] = useState(data);
  const handleData = (e)=>{
    setInputData({...inputData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((res)=>{
        console.log(res);
    })
  }
  return (
    <>
        <div>AxiosPOST </div>
        <label>First Name : </label>
        <input type='text' name='frname' value={inputData.frname} onChange={handleData}></input><br/>
        
        <label>Last Name : </label>
        <input type='text' name='laname' value={inputData.laname} onChange={handleData}></input><br/>

        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default AxiosPOST