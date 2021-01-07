import React from "react";
import{Link} from 'react-router-dom';
import "./card.scss";
import UserRating from "../userRating/UserRating";
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../../config'

const Card = ({name, poster_path, release_date, vote_average, id}) => {
  return (
    <Link to={`details/${id}`} className="card">
        <div className="card_main">
      <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`} alt={name} className="card_image"/>
      <div className="card_contain">
          {/* pass data value to the className Aswell */}
        <UserRating userRating={vote_average} />
        <h4>{name}</h4>
        <p>{release_date}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
