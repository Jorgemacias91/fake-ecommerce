import React from 'react';
import { connect } from 'react-redux';
import { addItemCart } from '../redux/actions';
import './Card.css';

const Card = ({ producto, agregarAlCarrito }) => {
	function handleClick() {
		agregarAlCarrito(producto);
	}

	return (
		<div onClick={handleClick} className="card">
			<div className="card__img">
				<img src={producto.image} />
			</div>
			<h2 className="card__title">{producto.title.toUpperCase()}</h2>
			<span className="card__price">{producto.price}</span>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		agregarAlCarrito: (payload) => dispatch(addItemCart(payload)),
	};
}

export default connect(null, mapDispatchToProps)(Card);
