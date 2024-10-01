import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import { fetchfromAPI } from '../utils/axios';
import { randomChar } from '../utils/random';

const Hero = () => {
const [result,setResult]=useState({})
const[bgImg, setBgImg]=useState("")
const searchRef= useRef("")
useEffect(()=>{
fetchMovie(randomChar())
},[]);


const fetchMovie=async str=>{
const movieData= await fetchfromAPI(str);
setResult(movieData)
setBgImg(movieData.Poster)
}
const handleOnMovieSearch=()=>{
    const str=searchRef.current.value
    fetchMovie(str)
    searchRef.current.value=""
}
const movieStyle={
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"60vh",
    }

  return (
    <div>
      <nav className=" py-3 text-danger fixed-top" >
        <h2 className='container
        '>MovieGaga</h2>
      </nav>

      <div className="hero d-flex justify-content-center align-items-center text-light" style={movieStyle}>

        <div className='hero-content'>

        <div className="form-center">
            <div className="text-center">
                <h1>Search Millions of Movies</h1>
                <p>Find about the movie more in details before watching them ...</p>
            </div>
        </div>


        <div className="input-group my-5">
        <input 
        ref={searchRef}
        type="text" className="form-control" placeholder="Search Movie by Title" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button onClick={handleOnMovieSearch} className="btn btn-danger" type="button" id="button-addon2">Search</button>
        </div>
        <div className="movie-card-display">
            <MovieCard result={result}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
