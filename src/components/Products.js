import React, { useContext } from 'react';

// Contexts
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container" style={{maxWidth: '1100px'}}>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
