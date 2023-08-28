import { MOVIE_TYPES } from "../types/movie-types";
import { Action, State } from "./reducer-types";

const { SET_MOVIE_DATA } = MOVIE_TYPES;

//here reducer gets the data and filter according to the genres

const initialState = {
    data: [],
    action: [],
    crime: [],
    drama: [],
    history: [],
    biography: []
}
type props = {
    genres: [string]
}

export const MovieReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case SET_MOVIE_DATA:
            const list = action.payload;
            const actionData = list.filter((item: props) => item.genres.includes("Action"));
            const dramaData = list.filter((item: props) => item.genres.includes("Drama"));
            const crimeData = list.filter((item: props) => item.genres.includes("Crime"));
            const biographyData = list.filter((item: props) => item.genres.includes("Biography"));
            const historyData = list.filter((item: props) => item.genres.includes("History"));
            return {
                ...state,
                data: action.payload,
                action: actionData,
                drama: dramaData,
                crime: crimeData,
                biography: biographyData,
                history: historyData
            }
        default:
            return state;
    }
}