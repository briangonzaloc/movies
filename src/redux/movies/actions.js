export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export const getMovies = (dispatch, params) => dispatch({ type: GET_MOVIES, payload: params });
export const filterMovies = (dispatch, params) => dispatch({ type: FILTER_MOVIES, payload: params });