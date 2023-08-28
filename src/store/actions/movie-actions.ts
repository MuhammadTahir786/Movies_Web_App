import { MOVIE_TYPES } from "../types/movie-types";
import { Dispatch } from "redux";
import { MoviesAPI } from "../../services/movie";

const { SET_MOVIE_DATA } = MOVIE_TYPES;

// two actions are made when one is dispatch it transfer the payload to reducer and sets the data on state

export interface MovieActionType {
    type: string,
    payload: {}
}

export const setMoviesData = (data: {}): MovieActionType => ({
    type: SET_MOVIE_DATA,
    payload: data
})

export const moviesAction = (params: string) => async (dispatch: Dispatch) => {
    const response = await MoviesAPI.getMovies(params);
    try {
        dispatch(setMoviesData(response.data.movies))
    }
    catch (e) {
        console.log(e)
    }
}