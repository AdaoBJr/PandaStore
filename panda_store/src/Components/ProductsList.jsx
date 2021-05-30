import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div>
            <ProductCard key={product.id} product={product} />
            <button
              type="button"
            >
              <Link to={`/details/${product.id}`}>
                Mais Detalhes
              </Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
