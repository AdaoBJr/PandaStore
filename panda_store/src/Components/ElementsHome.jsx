import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import lupa from '../images/lupa.png';
import imgCart from '../images/cart.png';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      handleChange,
      handleClickInput,
      cart,
    } = this.props;

    return (
      <div className="elementsHome">
        <div className="inputButtons">
          <input
            className="inputSearch"
            placeholder="Insira um produto"
            type="text"
            onChange={handleChange}
          />
          <button
            className="buttonSearch"
            type="button"
            onClick={handleClickInput}
          >
            <img src={lupa} alt="pesquisar" className="imgSearch" />
          </button>
          <div className="qtdAndCart">
            <button
              className="cartSearch"
              type="button"
            >
              <Link
                to={{
                  pathname: '/cart',
                  state: { cart },
                }}
              >
                <img src={imgCart} alt="carrinho de compras" className="imgCart" />
              </Link>
            </button>
            <p className={(cart.length === 0) ? 'qtdCart' : ''}>{cart.length}</p>
          </div>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickInput: PropTypes.func.isRequired,
};
