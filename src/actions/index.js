import axios from "axios";
import { API_KEY, API_URL } from "../config";
import {
  GET_MENU_ITEM,
  GET_MOVIE_BY_SEARCH,
  GET_MOVIE_BY_ID,
  GET_MOVIE_CAST,
  GET_BANNER_BACK,
} from "./types";

export const getpopularmovies = (menuItem) => {
  return async (dispatch) => {
    const result = await axios.get(
      `${API_URL}movie/${menuItem}?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_MENU_ITEM,
      payload: result.data.results,
    });
  };
};

export const getMovie = (movieId) => {
  return async (dispatch) => {
    const movie_by_id = await axios.get(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: movie_by_id.data,
    });
  };
};

export const getMovieCast = (movieId) => {
  return async (dispatch) => {
    const actors = await axios.get(
      `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_CAST,
      payload: actors.data.cast,
    });
  };
};

export const searchMovies = (searchTerm) => {
  return async (dispatch) => {
    let endPoint;
    if (!searchTerm) {
      endPoint = await axios.get(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
    } else {
      endPoint = await axios.get(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
    }

    dispatch({
      type: GET_MOVIE_BY_SEARCH,
      payload: endPoint.data,
    });
  };
};

export const bannerBack = () => {
  return async (dispatch) => {

    const randomImage = Math.floor(Math.random() * 10) + 1;
    const result = await axios.get(
      `${API_URL}trending/tv/day?api_key=${API_KEY}`
    );
    dispatch({
      type: GET_BANNER_BACK,
      payload: result.data.results[randomImage],
    });
  };
};
