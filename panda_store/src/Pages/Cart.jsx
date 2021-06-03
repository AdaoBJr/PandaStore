import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <div className="cartEmpty">
          <h3>Carrinho de Compras</h3>
          <h5>Seu carrinho está vazio.</h5>
          <div className="areaButtons">
            <button
              type="button"
              className="buttonCheckout"
            >
              <Link to="/">
                Finalizar Compra
              </Link>
            </button>
            <button
              type="button"
              className="buttonHome"
            >
              <Link to="/">
                Home
              </Link>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="cartFull">
        <div className="itemsCart">
          {cart.map(({
            id, title, price, thumbnail, count,
          }) => (
            <div key={id} className="itemCart">
              <h4 className="title">{title}</h4>
              <img src={thumbnail} alt={title} width="80px" />
              <h4>
                {`Qtide: ${count
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </h4>
              <h4 className="price">
                {`Preço: R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </h4>
            </div>
          ))}
        </div>
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCheckout"
          >
            <Link to="/">
              Finalizar Compra
            </Link>
          </button>
          <button
            type="button"
            className="buttonHome"
          >
            <Link to="/">
              Home
            </Link>
          </button>
        </div>
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
