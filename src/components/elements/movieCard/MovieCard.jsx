import React from "react";
import "./movieCard.scss";
import { IMAGE_BASE_URL } from "../../../config";
import movieImage from '../../../images/movie.jpg'

const MovieCard = ({ overview, title, release_date, poster_path }) => {
  const poster = `${IMAGE_BASE_URL}/w154${poster_path}`;
  return (
    <div className="movie_card">
      <div className="image_flex">
        <img src={poster_path ? poster : movieImage } alt={title} />
      </div>
      <div className="flex_fullColumn">
        <h5>{title}</h5> 
        <p> Release: {release_date}</p>
        {/* <p>{overview}</p> */}
      </div> 
    </div>
  );
};

export default MovieCard;
