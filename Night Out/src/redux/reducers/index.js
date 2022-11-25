import {
	GET_USER,
	POST_USER,
	GET_PUBLICATIONS,
	FILTER_BY_QUERY,
	POST_PUBLICATIONS,
	GET_PROVINCES,
	GET_MUNICIPALITIES
} from '../actions';

const initialState = {
	user: [],
	allPublications: [],
	currentPublications: [],
	provinces: [],
	municipalities: []
};

export default function reducers(state = initialState, { payload, type }) {
	switch (type) {
		case GET_USER:
			return {
				...state,
				user: payload
			};
		case POST_USER:
			return {
				...state,
				user: payload
			};
		case GET_PUBLICATIONS:
			return {
				...state,
				allPublications: payload,
				currentPublications: payload
			};
		case FILTER_BY_QUERY:
			return {
				...state,
				currentPublications: payload
			};

		case POST_PUBLICATIONS:
			return {
				...state,
				publications: [...state.allPublications, payload]
			};

		case GET_PROVINCES:
			return {
				...state,
				provinces: payload
			};
		case GET_MUNICIPALITIES:
			return {
				...state,
				municipalities: payload
			};
		default:
			return state;
	}
}
