import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import axios from "axios";
import MovieCard from "../elements/movieCard/MovieCard";
import "./searchresult.scss";

const SearchResults = (props) => {
  const { searchTerm } = props.match.params;
  // console.log(searchTerm)
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
      setSearchResult(result.data.results);
    };
    fetchData();
  }, []);

  console.log(searchResult);
  return (
    <div className="serchresult_container">
      {searchResult.length > 0 ? (
        searchResult.map((movie) => (
          <MovieCard
            key={movie.id}
            overview={movie.overview}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))
      ) : (
        <h2>No result Found</h2>
      )}
    </div>
  );
};

export default SearchResults;
