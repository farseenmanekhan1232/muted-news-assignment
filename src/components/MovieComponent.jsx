import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  console.log(movieInfo);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="heading">List of cards</div>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
