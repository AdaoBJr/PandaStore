import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lupa from '../images/lupa.png';
import cart from '../images/cart.png';
import ProductsList from './ProductsList';
import Categories from './Categories';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      products,
      categories,
      handleChange,
      handleClickInput,
      handleClickCategory,
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
          <button
            className="cartSearch"
            type="button"
          >
            <img src={cart} alt="carrinho de compras" className="imgCart" />
          </button>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <div className="Cards">
          <Categories categories={categories} handleClickCategory={handleClickCategory} />
          <ProductsList products={products} />
        </div>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickInput: PropTypes.func.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
};
