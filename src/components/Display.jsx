import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Display = ({movieList}) => {
  const [displayList, setDisplayList]=useState([])
  useEffect(()=>{
    setDisplayList(movieList)
  },[movieList])

const getType=(Type)=>{
  if(Type==="all"){
    console.log("all")
   return setDisplayList(movieList)
  }
  else{
    console.log("else")

    return setDisplayList(movieList.filter((mv)=>mv.type!==Type))
  }
}
console.log(movieList)
  return (
    <div className="container  mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary" onClick={()=>{getType("all")}}>
                All
              </button>
              <button type="button" class="btn btn-warning"  onClick={()=>{getType("Drama")}}>
                Drama
              </button>
              <button type="button" class="btn btn-info"  onClick={()=>{getType("Action")}}>
                Action
              </button>
            </div>
            <div className="mt-3 text-light">2 movies listed</div>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col d-flex justify-content-center flex-wrap gap-2">
                {
                movieList.map((item,i)=>(
                    <div className="" key={i}>
                      <MovieCard result={item}/>
                    </div>
                )
              )
              }


            </div>
        </div>


      </div>
    </div>
  );
};

export default Display;
