import { getMovie } from "../actions";
import { GET_MENU_ITEM, GET_BANNER_BACK } from "../actions/types";

const defaultState = {
  movies:[],
  loading: false,
  backdrop:[] 
};

const getmenuMovie = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MENU_ITEM:
      return {
          ...state,
        movies: action.payload
      };

      case GET_BANNER_BACK:
        return {
          ...state,
          backdrop:action.payload
        }
    default:
      return state;
  }
};
export default getmenuMovie;
