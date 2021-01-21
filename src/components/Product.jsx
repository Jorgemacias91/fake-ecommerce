import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './Cart.css';

const Product = (props) => {
	console.log(props.match.params.id);
	return (
		<div>
			<h2>Productos Agregados al carrito</h2>
		</div>
	);
};

export default Product;
