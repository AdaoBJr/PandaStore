import React, { Component } from 'react';
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
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )));
  }
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
