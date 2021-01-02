import React from "react";
import "./card.scss";
import "./progress.scss";
import cardImage from "../../../images/all_image.jpg";

const Card = () => {
  return (
    <div className="card_main">
      <img src={cardImage} alt="data-image" className="card_image" />
      <div className="card_contain">
          {/* pass data value to the className Aswell */}
        <div className="progress--circle progress--40">
          <div className="progress__number">86<sup style={{fontSize:".6rem"}}>%</sup></div>
        </div>
        <h2>Title of the Movie</h2>
        <p>Release Date</p>
      </div>
    </div>
  );
};

export default Card;
