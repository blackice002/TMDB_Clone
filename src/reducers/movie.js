import { GET_MOVIE_CAST, GET_MOVIE_BY_ID } from "../actions/types";

const defaultState = {
  movieDetail: {},
  cast: [] ,
  diretors: [],
  loading: false,
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
    //   console.log("action of the movie is ", action.payload);
      return {
        ...state,
        movieDetail: action.payload,
        cast:[]

      };
    case GET_MOVIE_CAST:
    //   console.log("cast:", action.payload);
      return {
        ...state,
        cast: action.payload,
      };

    default:
      return state;
  }
};
export default movieDetail;
