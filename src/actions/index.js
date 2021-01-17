export const 
    ADD_MOVIES = 'ADD_MOVIES', 
    ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES', 
    ADD_SEARCH_MOVIE = 'ADD_SEARCH_MOVIE',
    DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES'
;

export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
} 

export function addMovieToFavourites(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function deleteMovieFromFavourites(movie) {
    return {
        type: DELETE_FROM_FAVOURITES,
        movie
    }
}

export function handleMovieSearch (movie) {
    return function(dispatch) {
        // call an api to get a searched movie from omdbapi
        // when calling api it is going to be asynchronous, hence handle everything in promise
        let searchedMovie = 'searchedMovie';
        //  now here we should dispatch the actual movie that we got to reducer
        dispatch(addMovieSearchResult(searchedMovie));
    }
}

export function addMovieSearchResult (movie) {
    return {
        type: ADD_SEARCH_MOVIE,
        movie
    }
}