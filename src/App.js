import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { getProducts } from './redux/actions';

function App(props) {
	useEffect(() => {
		props.obtenerProductos();
	}, []);
	//componentDidMount

	return (
		<div className="App">
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route
				path="/product/:id"
				render={({ match }) => <Product match={match} />}
			/>
			<Route exact path="/cart" component={Cart} />
			<Route exact path="/about" render={() => <About />} />
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		obtenerProductos: () => dispatch(getProducts()),
	};
}

export default connect(null, mapDispatchToProps)(App);
