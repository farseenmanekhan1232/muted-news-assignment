import React from "react";

const MovieCard = ({ myData }) => {
  const { title, images, description } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <img className="card-image" src={images[0]} alt="" srcset="" />
        <h3>{title.substr(0, 15)}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
