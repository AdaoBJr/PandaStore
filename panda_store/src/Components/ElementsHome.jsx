import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lupa from '../images/lupa.png';
import cart from '../images/cart.png';
import ProductsList from './ProductsList';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { products, handleChange, handleClick } = this.props;
    return (
      <div className="elementsHome">
        <div className="inputButtons">
          <input
            className="inputSearch"
            placeholder="Insira um produto"
            type="text"
            onChange={handleChange}
            onClick={handleClick}
          />
          <button
            className="buttonSearch"
            type="button"
          >
            <img src={lupa} alt="pesquisar" className="imgSearch" />
          </button>
          <button
            className="cartSearch"
            type="button"
          >
            <img src={cart} alt="carrinho de compras" className="imgCart" />
          </button>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <ProductsList products={products} />
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
