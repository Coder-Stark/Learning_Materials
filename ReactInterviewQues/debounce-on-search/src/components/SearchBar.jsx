import React, { useEffect, useState } from 'react'

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  let accessKey = "-NeXQP52uibdmLUwypuhWJTZtRHHiP3ASvZNp7iCn60";
  let pageNo = 1;
  const getData = async (searchData)=>{
    if(searchData !== ''){
        const data = await fetch(`https://api.unsplash.com/search/photos?query=${searchData}&per_Page=28&P=${pageNo}&client_id=${accessKey}`);
        const jsonData = await data.json();
        // console.log(jsonData);
        setData(jsonData.results);
        console.log(jsonData.results);
        console.log("Search Data String : " ,searchData);
    }else{
        setData([]);
    }
  }
  const handleInput = (e)=>{
    setInput(e.target.value);
  }
  useEffect(()=>{
    let timer = setTimeout(() => {
                    getData(input);
                }, 300);
    return ()=>clearTimeout(timer);
  },[input]);

  return (
    <>
      <h1>Search Bar Using Debouncing</h1>
      <div className='searchBox'>
        <input type="text" placeholder='Search Here...' onKeyUp={handleInput}/>
      </div>
      <div className='datas'>
        {
            data.length > 0 ?
            data.map((currVal, i)=>{
                return(
                    <div className='card' key={i}>
                        <img src={currVal.urls.thumb} />
                    </div>

                )
            })
            : 'Images shows Here'
        }
      </div>
    </>
  )
}

export default SearchBar