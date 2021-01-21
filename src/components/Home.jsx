import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemCart, getProducts } from '../redux/actions';
import Card from './Card';
import './Home.css';
const Home = (props) => {
	console.log(props);
	/*[
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
		<Card producto={...} />
	]
	*/

	return (
		<div>
			<h2>Productos</h2>
			<div className="productos">
				{props.products.map((product) => (
					<Card key={product.id} producto={product} />
				))}
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		products: state.products,
		cart: state.cart,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		agregarAlCarrito: () => dispatch(addItemCart()),
		obtenerProductos: () => dispatch(getProducts()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
