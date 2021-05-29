import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h2>{title}</h2>
        <img src={thumbnail} alt={title} />
        <h4>{price}</h4>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
