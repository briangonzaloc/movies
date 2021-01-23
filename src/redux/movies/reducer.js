/*----- Actions -----*/
import {
	GET_MOVIES,
	GET_MOVIES_FAILED,
	GET_MOVIES_SUCCESS,
	FILTER_MOVIES
} from './actions';

const initialState = {
	data: [],
	loading: false,
	error: '',
	success: false,
	dataToShow: []
};

export default function movies(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				data: [],
				dataToShow: [],
				loading: true,
				error: '',
				success: false
			};
		case GET_MOVIES_SUCCESS:
			return {
				...state,
				data: action.payload,
				dataToShow: action.payload,
				loading: false,
				success: true,
			};
		case GET_MOVIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
				success: false,
			};
		case FILTER_MOVIES:
			let movies= [...state.data]
			if( action.payload ){
				movies = state.data.filter(movie=> movie.vote_average >= action.payload.start && movie.vote_average <= action.payload.end);
			}
			return {
				...state,
				dataToShow: movies
			}
		default:
			return state;
	}
}
