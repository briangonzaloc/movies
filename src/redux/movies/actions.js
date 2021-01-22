export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';

export const getMovies = (dispatch, params) =>
	dispatch({ type: GET_MOVIES, payload: params });
