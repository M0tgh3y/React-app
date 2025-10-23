import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = { 
        products: [
            {id:1, count: 4, productName: 'Laptop'},
            {id:2, count: 1, productName: 'Phone'},
            {id:3, count: 2, productName: 'Cable'}
        ]
     } 
    render() { 
        return (
            <>
                {this.state.products.map((p, index) => (
                    <Product key={index} productName={p.productName} count={p.count} />
                ))}
            </>
        );
    }
}
 
export default Products;