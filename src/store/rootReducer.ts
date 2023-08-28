import { combineReducers } from 'redux';
import { MovieReducer } from './reducers/movie-reducer';

// all reducers listed here in the rootReducer that is called in store
export const rootReducer = combineReducers({
    movies: MovieReducer
})

