import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title, thumbnail, price, attributes,
    } = product;
    return (
      <div>
        <p>{title}</p>
        <p>{thumbnail}</p>
        <p>{price}</p>
        <p>
          {attributes.map((attribute) => (
            <div key={attribute.name}>
              <p>{attribute.name}</p>
              <p>{attribute.value_name}</p>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }),
    }),
  }).isRequired,
};
