import React from "react";
import "./movieCard.scss";
import { IMAGE_BASE_URL } from "../../../config";

const MovieCard = ({ overview, title, release_date, poster_path }) => {
  const poster = `${IMAGE_BASE_URL}/w92${poster_path}`;
  return (
    <div className="movie_card">
      <div className="image_flex">
        <img src={poster} alt={title} />
      </div>
      <div className="flex_fullColumn">
        <h4>{title}</h4> 
        <h5> Release date: {release_date}</h5>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
