import React, { useState, useEffect } from "react";
import axios from "axios";
import "./banner.scss";
import {API_KEY,API_URL, BACKDROP_SIZE,IMAGE_BASE_URL} from "../../../config"
import {useHistory} from 'react-router-dom'

const Banner = (props) => {
  const [mediaDiscover, setMediaDiscover] = useState({});
  const [searchInput, setSearchInput] = useState('')
  const randomImage = Math.floor(Math.random() * 10) + 1; 
  const history =useHistory()
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${API_URL}trending/tv/day?api_key=${API_KEY}`
      );
      setMediaDiscover(result.data.results[randomImage]);
    };
    fetchData();
  }, []);

  const testImage =`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mediaDiscover.backdrop_path}`
  const bannerBack = {
    background: `linear-gradient(rgba(3, 37, 65, .8), rgba(3, 37, 65, .8)), url(${testImage}) top /cover`
  };


const Search=()=>{
history.push(`/results/${searchInput}`)
  }

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
            value={searchInput}
            onChange={(e)=> setSearchInput(e.target.value)}
            />
            <button onClick={()=>Search(searchInput)}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
