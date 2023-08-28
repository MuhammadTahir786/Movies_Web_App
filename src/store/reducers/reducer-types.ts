import { MOVIE_TYPES } from "../types/movie-types";

const { SET_MOVIE_DATA } = MOVIE_TYPES;

export type State = {
    data: any[],
    action: any[],
    crime: any[],
    drama: any[],
    history: any[],
    biography: any[]
}

export interface GetMovies {
    type: 'SET_MOVIE_DATA',
    payload: any
}


export type Action = GetMovies