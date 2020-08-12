import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';


class Products extends Component {
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
        return (
          <div style={{paddingLeft:'20px'}}>
            <p>All products:</p>
            {this.state.products.map((product) => 
             <Link key={product.id} to={`/products/${product.id}`} style={{fontSize:'20px', display:'flex'}}>{product.name}</Link> 
            )}
            <Route path='/products/:id' component={Product}></Route>
          </div>
        );
      }
}
export default Products;

 /*
    async componentDidMount() {
        const result = await fetch('http://localhost:3000', {
          method: 'GET',
        }).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          }
          return Promise.reject();
        });
        const products = []
        result.forEach((element) => {
            products.push(element)
          });
        this.setState({
          products:products,
        });
      }
      */