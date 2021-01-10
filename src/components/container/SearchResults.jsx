import React, { useEffect } from "react";
import MovieCard from "../elements/movieCard/MovieCard";
import { searchMovies } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./searchresult.scss";

const SearchResults = (props) => {
  const { searchTerm } = props.match.params;
  // console.log(searchTerm)
  // const [searchResult, setSearchResult] = useState([]);
  const searchResult = useSelector((state) => state.search.searchResult);

  const { page, results, total_pages, total_results } = searchResult;
  console.log("search results: ", searchResult);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(searchMovies(searchTerm));
  }, []);

  const movieDetails = (id) => {
    console.log(`clicked on movie id: ${id}`);
    history.push(`/details/${id}`)
  };

  // console.log(searchResult);
  return (
    <div className="serchresult_container">
      {results.length > 0 ? (
        results.map((movie) => (
          <div onClick={() => movieDetails(movie.id)}>
            <MovieCard
              key={movie.id}
              overview={movie.overview}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          </div>
        ))
      ) : (
        <h2>No result Found</h2>
      )}
    </div>
  );
};

export default SearchResults;
