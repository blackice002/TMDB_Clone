import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detail.scss";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  DETAIL_SIZE,
  POSTER_SIZE,
} from "../../config";
import UserRating from "../elements/userRating/UserRating";
import VideoModal from "../elements/modal/VideoModal";
import { getMovie, getMovieCast } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
// import ReactPlayer from "react-player";

const Details = (props) => {
  const { id } = props.match.params;

  // const [movieDetail, setMovieDetail] = useState({});
  // const [credits, setCredits] = useState([]);
  const { movieDetail, cast } = useSelector((state) => state.movieDetails);

  // console.log(movieDetail)
  console.log("movie ID Cast: ", cast);
  const dispatch = useDispatch();

  const poster = `${IMAGE_BASE_URL}${DETAIL_SIZE}${movieDetail.poster_path}`;
  const posterback = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieDetail.backdrop_path}`;

  // const artist_profile_path = `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`;
  const bannerBack = {
    background: `linear-gradient(90deg, rgba(233, 230, 231, 1)30%, rgba(233, 230, 231, .5)),url(${posterback}) top /cover`,
  };
  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getMovieCast(id));
  }, []);

  //   const latestMovie = async () => {
  //     const latest = await axios.get(
  //       `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`
  //     );
  //     console.log("latest Movie: ", latest);
  //   };
  //   latestMovie();

  // const director = credits.crew.filter((member) => member.job === "Director");
  // console.log(director)
  // console.log("movie details", movieDetail);
  // console.log(credits);
  return (
    <div className="detils_container">
      <div className="detail_header" style={bannerBack}>
        <div className="detail_contain">
          <img src={poster} alt={movieDetail.title} />
          <div className="movie_contain">
            <div>
              <h2>{movieDetail.title}</h2>
              {/* <p>Director: {director.name)} </p> */}
            </div>
            <div className="middle_row">
              <UserRating userRating={movieDetail.vote_average} />
              <VideoModal>
                <h1>Not Found</h1>
              </VideoModal>
            </div>
            <div>
              <h2>Overview</h2>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>

<div className="header-container">
<h2> crew memeber of the movie</h2>
      <hr />
</div>

      <div className="actor_container">
        <div className="actor_wrapper">
        {cast.map((actor, index) => (
          <div className="actor_div" key={actor.id + index}>
            {actor.profile_path? 
            <img
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`}
              alt={actor.name}
            /> : <h5>No image</h5> }
            <h4> {actor.name}</h4>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Details;
