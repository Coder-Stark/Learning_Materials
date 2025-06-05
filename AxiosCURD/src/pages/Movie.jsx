import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Movie() {
    const [data, setData] = useState([]);
    const API="https://www.omdbapi.com/?i=tt38961988&apikey=1c12799f&s=titanic&page=1";
    const getMovieData = async()=>{
        
        /* if we use fetch api
        try {
            const res = await fetch(API); // Using fetch instead of axios
            const data = await res.json(); // Convert response to JSON
            console.log(data.Search);
        } catch (err) {
            console.log(err);
        }
        */

        try{
            const res = await axios.get(API);
            console.log(res.data.Search);
            setData(res.data.Search);
        }catch(err){
            console.log(err);   
        }
    }
    useEffect(()=>{
        getMovieData();
    },[])
    return (
        <>
        <ul>
            {
                // data.map((x)=><h1>{x.Title}</h1>)    //we can use directly
                data.map((x)=>{
                    return <h1>{x.Title}</h1>
                })
            }
        </ul>
        </>
    )
}

export default Movie