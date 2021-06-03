import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { location: { state } } = this.props;
    const { shoppingCart, totalSum } = state;
    const haveCart = shoppingCart.length;

    if (!haveCart) {
      return (
        <div className="cartEmpty">
          <div>
            <h2>Resumo da Compra</h2>
            <h5>Seu carrinho está vazio.</h5>
          </div>
          <div className="areaButtons">
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
      <div className="checkoutFull">
        <div className="itemsCart">
          {shoppingCart.map(
            (
              {
                id, thumbnail, title, totalValue, count,
              },
            ) => (
              <div key={id}>
                <div className="itemCheckout">
                  <img src={thumbnail} alt={title} />
                  <h4 className="title">{title}</h4>
                  <h4>{ `Qtide: ${count}` }</h4>
                  <h3 className="price">
                    { `Valor R$:
                    ${totalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                  </h3>
                </div>
              </div>
            ),
          ) }
        </div>
        <h4 className="totalValue">
          {
            `VALOR TOTAL DO PRODUTOS:
            R$ ${totalSum.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`
          }
        </h4>
        <br />
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCheckout"
          >
            <Link to="/">
              Comprar
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
      totalSum: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
