import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { products } = this.props;
    return (
      products.map((product) => (
        <div key={product.id}>{product.title}</div>
      )));
  }
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
