import {combineReducers} from 'redux';
import home from './home';
import movie from './movie';

const rootReducers = combineReducers({
    home, 
    movie
})
export default rootReducers;