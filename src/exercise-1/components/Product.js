import React, { Component } from 'react';

class Product extends Component {
    
    state={
        products:[{
            "id": 1,
            "name": "Bicycle",
            "price": 30,
            "quantity": 15,
            "desc": "Bicycle is Good"
          },
          {
            "id": 2,
            "name": "TV",
            "price": 40,
            "quantity": 16,
            "desc": "TV is good"
          },
          {
            "id": 3,
            "name": "Pencil",
            "price": 50,
            "quantity": 17,
            "desc": "Pencil is good"
          },
        ]
    }
    
    render() {
        const id = this.props.match.params.id;
        const productSelect = this.state.products.filter(element => parseInt(element.id) === parseInt(id));
        return (
            <div>
                <p>Product Details:</p>
                <p>Name: {productSelect[0].name}</p>
                <p>Id: {id}</p>
                <p>Price: {productSelect[0].price}</p>
                <p>Quantity: {productSelect[0].quantity}</p>
                <p>Desc: {productSelect[0].desc}</p>
                <p>URL: /products/{id}</p>
            </div>
        );
    }
}

export default Product;