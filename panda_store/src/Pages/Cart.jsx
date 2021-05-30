import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { location: { state: { cart } } } = this.props;
    const { title } = cart;

    return (
      <div>
        <h3>Carrinho de Compras</h3>
        <h5>Seu carrinho está vazio.</h5>
        <h1>{title}</h1>
      </div>
    );
  }
}

// Cart.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       cart: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         // price: PropTypes.number.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
