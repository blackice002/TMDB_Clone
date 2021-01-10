import {combineReducers} from 'redux';
import home from './home';
import movieDetails from './movie';
import search from './search'

const rootReducers = combineReducers({
    home, 
    movieDetails,
    search
})
export default rootReducers;