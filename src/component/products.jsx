import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Product productName='laptop'/>
                <Product productName='phone'/>
                <Product productName='cable'/>
            </div>
        );
    }
}
 
export default Products;