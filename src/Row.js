import React, { useEffect, useState } from 'react'
import './css/Row.css'
import axios from './localaxios';

function Row({title, isLargeRow, fetchURL}) {
    const[movies, setMovie]= useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchURL);
            
             setMovie(request.data.results);
             return request
        }
        fetchdata()
    },[fetchURL])
  return (
    <div className='row'>
         
       <h2>{title}</h2>
       <div className='row__posters'>
        {
            movies.map(movie=>{
                return   <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} className={`rowposter ${isLargeRow && "largeimage"}`} key=
                {movie.id}/>
            })
        }

        
   </div>
    </div>
  )
}

export default Row