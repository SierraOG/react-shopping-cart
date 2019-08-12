import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	console.log(JSON.parse(localStorage.getItem('cart')))
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

	const addItem = item => {
		setCart([...cart, item]);
		localStorage.setItem('cart',JSON.stringify([...cart, item]))
	};
	
	const removeItem = itemId => {
		let newCart = cart.filter((cartItem) => {
			return cartItem.id !== itemId
		})
		console.log('new cart', newCart)
		setCart(newCart)
		localStorage.setItem('cart',JSON.stringify(newCart))
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route exact path="/" component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
