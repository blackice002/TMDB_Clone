import React, { useState, useEffect } from "react";
import testImage from "../../../images/amazon.png";
import axios from "axios";
import "./banner.scss";

const Banner = () => {
  const [mediaDiscover, setMediaDiscover] = useState();

  const bannerBack = {
    background: `linear-gradient(rgba(3, 37, 65, .95), rgba(3, 37, 65, .85)), url(${testImage})`,
  };

  // useEffect(() => {
  // const fetchData= async () =>{
  //     const result = axios()
  // }

  // }, [])

  return (
    <div className="banner" style={bannerBack}>
      <div className="banner_container">
        <div className="text_head">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="input_group">
            <input type="text" className="input_text"
            placeholder="Search for a movie, tv show, person..."
            />
            <button onClick={()=>console.log("button clicked")}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
