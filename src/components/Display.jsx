import React from "react";
import MovieCard from "./MovieCard";

const Display = () => {
  return (
    <div className="container  mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">
                All
              </button>
              <button type="button" class="btn btn-warning">
                Drama
              </button>
              <button type="button" class="btn btn-info">
                Action
              </button>
            </div>
            <div className="mt-3 text-light">2 movies listed</div>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col d-flex justify-content-center flex-wrap gap-2">
                {/* <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/> */}


            </div>
        </div>


      </div>
    </div>
  );
};

export default Display;
