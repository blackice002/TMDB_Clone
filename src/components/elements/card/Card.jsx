import React from "react";
import "./card.scss";
import cardImage from "../../../images/all_image.jpg";

const Card = () => {
  return (
    <div className="card_main">
      <img src={cardImage} alt="data-image" className="card_image" />
      <div className="user_rating"></div>
      <h2>Title of the Movie</h2>
      <p>Release Date</p>
    </div>
  );
};

export default Card;
