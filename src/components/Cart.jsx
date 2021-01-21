import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './Cart.css';

const Cart = ({ carrito }) => {
	return (
		<div>
			<h2>Productos Agregados al carrito</h2>
			<Card producto={carrito} />
		</div>
	);
};

function mapStateToProps(state) {
	return {
		carrito: state.cart,
	};
}

export default connect(mapStateToProps, null)(Cart);
