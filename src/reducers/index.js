import { combineReducers } from 'redux';
import {ADD_MOVIES, ADD_TO_FAVOURITES, ADD_SEARCH_MOVIE, DELETE_FROM_FAVOURITES} from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}

export function moviesReducer(state = initialMoviesState, action) {
    switch(action.type) {
        case ADD_MOVIES : 
            return {
                ...state, list: action.movies
            }   
        case ADD_TO_FAVOURITES :
            return {
                ...state, favourites: [...state.favourites, action.movie]
            }
        case DELETE_FROM_FAVOURITES:
            return {
                ...state, favourites: state.favourites.filter((movie) => {
                    return movie !== action.movie
                })
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
}

export function searchReducer(state = initialSearchState, action) {
    if(action.type === ADD_SEARCH_MOVIE)
        return {
            ...state,
            result: action.movie
        }
    return state;
}

// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: moviesReducer(state.movies, action),
//         search: searchReducer(state.search, action)
//     }
// }

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer
});

export default rootReducer;