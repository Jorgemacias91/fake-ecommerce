export const ADD_ITEM_CART = 'ADD_ITEM_CART';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export function addItemCart(payload) {
	return {
		type: ADD_ITEM_CART,
		payload,
	};
}

export function getProducts() {
	return function (dispatch) {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				//console.log(json)
				dispatch({ type: GET_PRODUCTS, payload: json });
			});
	};
}
