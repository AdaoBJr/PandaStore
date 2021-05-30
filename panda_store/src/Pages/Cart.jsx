import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { location: { state: { cart } } } = this.props;
    const haveCart = cart.length;
    if (!haveCart) {
      return (
        <div>
          <h3>Carrinho de Compras</h3>
          <h5>Seu carrinho está vazio.</h5>
        </div>
      );
    }
    return (
      <div>
        {cart.map(({
          id, title, price, thumbnail, count,
        }) => (
          <div key={id}>
            <h4>{title}</h4>
            <img src={thumbnail} alt={title} width="80px" />
            <h4>{`Quantidade: ${count}`}</h4>
            <h4>{price}</h4>
          </div>
        ))}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        map: PropTypes.func.isRequired,
        length: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
