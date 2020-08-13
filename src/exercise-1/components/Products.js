import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../exercise-2/mockups/data.json';


class Products extends Component {
    render() {
        return (
          <div>
            <p>All products:</p>
            {Object.entries(data).map(([name,product]) => 
             <Link key={name} to={`/products/${product.id}`} className="productLink">{product.name}</Link> 
            )}
            
          </div>
        );
      }
}
export default Products;
