/*----- Actions -----*/
import {
	RESET_STARS,
} from './actions';

const initialState = {
	resetStars: false
};

export default function stars(state = initialState, action) {
	switch (action.type) {
		case RESET_STARS:
			return {
        ...state,
				resetStars: action.payload
			};
		default:
			return state;
	}
}
