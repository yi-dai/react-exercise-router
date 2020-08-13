import React, { Component } from 'react';
import data from '../../exercise-2/mockups/data.json';

class Product extends Component {
    
    render() {
        const id = this.props.match.params.id;
        const productSelect = Object.values(data).find(product => (
          parseInt(id) === parseInt(product.id)
        ));
        return (
            <div>
                <p>Product Details:</p>
                <p>Name: {productSelect.name}</p>
                <p>Id: {id}</p>
                <p>Price: {productSelect.price}</p>
                <p>Quantity: {productSelect.quantity}</p>
                <p>Desc: {productSelect.desc}</p>
                <p>URL: /products/{id}</p>
            </div>
        );
    }
}

export default Product;