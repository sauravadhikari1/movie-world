import React from 'react'

const MovieCard = ({result, deleteFunc,handleOnAdd}) => {
    const {Poster, Title,imdbRating,Plot, mood,imdbID}=result
    // const poster="https://www.omdbapi.com/src/poster.jpg"
   
  return (
    <div>
      <div className="container movie-card-item">
        <div className="row border rounded text-dark p-3">
            <div className="col-md">
                <img src={Poster} alt="" />
            </div>
            <div className="col-md">
                <h3>
                    {Title}
                </h3>
                <p>{imdbRating}</p>
                <p>{Plot?.slice(0,50)}...</p>
                {
                  !mood &&(

                <div className='d-flex justify-content-between'>
                    <button className="btn btn-warning" onClick={()=>{
                      handleOnAdd("Drama")
                    }}>Drama</button>
                    <button className="btn btn-info" onClick={()=>{
                      handleOnAdd("Action")
                    }}>Action</button>
                </div>

                  )
                }

                <div className="d-grid mt-3">
                    <button className="btn btn-danger " onClick={()=>deleteFunc(imdbID)}>Delete</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
