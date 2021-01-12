import React, { useState, useEffect } from "react";
import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../../../config"
import "./banner.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bannerBack, searchMovies } from "../../../actions";

const Banner = (props) => {
  const [searchInput, setSearchInput] = useState();
  const mediaDiscover = useSelector( (state) => state.home.backdrop);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bannerBack());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchMovies(searchInput));

  }, [searchInput])

  const testImage = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${mediaDiscover.backdrop_path}`;
  const bannerBackground = {
    background: `linear-gradient(rgba(3, 37, 65, .8), rgba(3, 37, 65, .8)), url(${testImage}) top /cover`,
  };

  const Search = () => {
    
    history.push(`/results/${searchInput}`); 
    // setSearchInput("")
  };
console.log("searchInput", searchInput)
  return (
    <div className="banner"  style={bannerBackground} >
      <div className="banner_container">
        <div className="text_head">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="input_group">
          <input
            type="text"
            className="input_text"
            placeholder="Search for a movie, tv show, person..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={() => Search()}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
