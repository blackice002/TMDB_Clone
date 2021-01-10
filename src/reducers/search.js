import { GET_MOVIE_BY_SEARCH} from "../actions/types";

const defaultState = {
  searchResult: [],
  loading: false,
};

const searchResult = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_SEARCH:
    //   console.log("action of the movie is ", action.payload);
      return {
        ...state,
        searchResult: action.payload,

      };
    default:
      return state;
  }
};
export default searchResult;
