import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Hero from './components/Hero';

function App() {
  const[movieList,setMovieList]=useState([]);

  const addList=(movie)=>{
    const temparr= movieList.filter((item)=>item.imdbID !== movie.imdbID)
    setMovieList([
      ...temparr,
      movie
    ])
    
  }
  return (
   <div className="wrapper">
    <Hero addList={addList}/>
    <Display movieList={movieList}/>
   </div>
  );
}

export default App;
