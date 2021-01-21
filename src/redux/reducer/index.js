import { ADD_ITEM_CART, GET_PRODUCTS } from '../actions';

const initialState = {
	cart: {},
	products: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM_CART:
			return {
				...state,
				cart: action.payload,
			};
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
}
