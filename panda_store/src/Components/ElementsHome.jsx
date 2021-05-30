import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import lupa from '../images/lupa.png';
import imgCart from '../images/cart.png';
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
      handleAddCart,
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
          <button
            className="cartSearch"
            type="button"
          >
            <Link to={{
              pathname: '/cart',
              state: { cart },
            }}
            >
              <img src={imgCart} alt="carrinho de compras" className="imgCart" />
            </Link>
          </button>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <div className="Cards">
          <Categories categories={categories} handleClickCategory={handleClickCategory} />
          <ProductsList
            products={products}
            handleAddCart={handleAddCart}
          />
        </div>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickInput: PropTypes.func.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
  handleAddCart: PropTypes.func.isRequired,
};
