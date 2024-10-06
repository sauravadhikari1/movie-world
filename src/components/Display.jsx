import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Display = ({ movieList,handleOnDelete }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const getType = (Type) => {
    if (Type === "all") {
      setDisplayList(movieList);
    } else {
      const filteredList = movieList.filter((movie) => movie.mood === Type);
      setDisplayList(filteredList);
    }
  };

  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  getType("all");
                }}
              >
                All
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  getType("Drama");
                }}
              >
                Drama
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                  getType("Action");
                }}
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayList.length} movies listed
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex justify-content-center flex-wrap gap-2">
            {displayList.map((item, i) => (
              <div key={i}>
                <MovieCard result={item} 
                deleteFunc={handleOnDelete}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
