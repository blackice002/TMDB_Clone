/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import Column_Header from "../columnHeader/Column_Header";
import "./popular.scss";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getpopularmovies } from "../../../actions";

const Popular = () => {
  const [querydata, setQuerydata] = useState("popular");

  const getPopular = useSelector((state) => state.home.movies);
  const dispatch = useDispatch();

  console.log(getPopular);
  useEffect(() => {
    dispatch(getpopularmovies(querydata));
  }, [dispatch, querydata]);

  const changeQueryData = (childData) => {
    setQuerydata(childData);
  };

  const getSortedData = getPopular?.sort(
    (a, b) => b.vote_average - a.vote_average
  );

  // const getSortedData = [];
  return (
    <div className="popular_wrapper">
      <div className="popular_title">
        <h2>What's Popular</h2>
        <Column_Header queryStateChange={changeQueryData} />
      </div>

      <div className="movie_wrapper">
        {getSortedData.length > 0 ? (
          getSortedData?.map((movie) => (
            <Card
              key={movie.id}
              name={movie.title ? movie.title : movie.name}
              poster_path={movie.poster_path}
              release_date={
                movie.release_date ? movie.release_date : movie.first_air_date
              }
              vote_average={movie.vote_average}
              id={movie.id}
            />
          ))
        ) : (
          <h2>Loading ...</h2>
        )}
      </div>
    </div>
  );
};

export default Popular;
