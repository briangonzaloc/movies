/*----- Actions -----*/
import {
	GET_MOVIES,
	GET_MOVIES_FAILED,
	GET_MOVIES_SUCCESS,
} from './actions';

const initialState = {
	data: [],
	loading: false,
	error: '',
	success: false,
};

export default function movies(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				data: [],
				loading: true,
				error: '',
				success: false
			};
		case GET_MOVIES_SUCCESS:
			return {
				...state,
				data: action.payload,
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
		default:
			return state;
	}
}
