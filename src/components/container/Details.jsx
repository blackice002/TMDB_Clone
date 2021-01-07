import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detail.scss";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  DETAIL_SIZE,
} from "../../config";
import UserRating from "../elements/userRating/UserRating";
import VideoModal from "../elements/modal/VideoModal";
// import ReactPlayer from "react-player";

const Details = (props) => {
  const { id } = props.match.params;

  const [movieDetail, setMovieDetail] = useState({});
  const [credits, setCredits] = useState([]);

  const poster = `${IMAGE_BASE_URL}${DETAIL_SIZE}${movieDetail.poster_path}`;
  const posterback = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieDetail.backdrop_path}`;

  const bannerBack = {
    background: `linear-gradient(90deg, rgba(233, 230, 231, 1)30%, rgba(233, 230, 231, .5)),url(${posterback}) top /cover`,
  };

  useEffect(() => {
    const fetchDetils = async () => {
      const dataDetail = await axios.get(
        `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovieDetail(dataDetail.data);
    };
    const credits = async () => {
      const casts = await axios.get(
        `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCredits(casts.data);
    };

    const latestMovie = async () => {
      const latest = await axios.get(
        `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`
      );
      console.log("latest Movie: ", latest);
    };
    latestMovie();
    fetchDetils();
    credits();
  }, []);

  const director = credits.crew.filter((member) => member.job === "Director");
  // console.log(director)
  // console.log(movieDetail);
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
    </div>
  );
};

export default Details;
