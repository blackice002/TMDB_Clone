import React, { useEffect } from "react";
import MovieCard from "../elements/movieCard/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./searchresult.scss";
import movieImage from '../../images/movie.jpg'
import bannerCanvas from "../../images/movie_canvas.jpg"

const SearchResults = (props) => {
  const { searchResult, loading } = useSelector((state) => state.search);

  const { page, results, total_pages, total_results } = searchResult;
  console.log("search results: ", searchResult);
  const history = useHistory();

  const movieDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
<div className="search_container">
{/* banner  */}
<div className="search_banner">
  <img src={bannerCanvas} alt="movie_canvas"/>
</div>

{/* search reslts */}

<div className="serchresult_container">
      {loading ? (
        <h2>No result Found</h2>
      ) : (
        results.map((movie) => (
          <div onClick={() => movieDetails(movie.id)} key={movie.id} >
            <MovieCard
              overview={movie.overview}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path? movie.poster_path: movieImage }
            />
          </div>
        ))
      )}
    </div>
</div>

    
  );
};

export default SearchResults;
