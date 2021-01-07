/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import Column_Header from "../columnHeader/Column_Header";
import axios from "axios";
import "./popular.scss";
import Card from "../card/Card";
import { API_KEY, API_URL } from "../../../config";

const Popular = () => {
  const [querydata, setQuerydata] = useState("popular");
  const [getPopular, setgetPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${API_URL}movie/${querydata}?api_key=${API_KEY}&language=en-US&page=1`
      );
      setgetPopular(result.data.results)
    };
    fetchData();
  }, [querydata]);

  const changeQueryData = (childData) => {
    setQuerydata(childData);
  };
  // console.log(querydata);
  // console.log(getPopular);

  const getSortedData = getPopular.sort(
    (a, b) => b.vote_average - a.vote_average
  );

  return (
    <div className="popular_wrapper">
      <div className="popular_title">
        <h2>What's Popular</h2>
        <Column_Header queryStateChange={changeQueryData} />
      </div>

      <div className="movie_wrapper">
        {getSortedData.length > 0 ? (
          getSortedData.map((movie) => (
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
