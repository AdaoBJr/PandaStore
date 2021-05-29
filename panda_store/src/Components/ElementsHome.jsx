import React, { Component } from 'react';
import lupa from '../images/lupa.png';
import cart from '../images/cart.png';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="elementsHome">
        <div className="inputButtons">
          <input
            className="inputSearch"
            placeholder="Insira um produto"
            type="text"
          />
          <button
            className="buttonSearch"
            type="button"
          >
            <img src={lupa} alt="pesquisar" />
          </button>
          <button
            className="cartSearch"
            type="button"
          >
            <img src={cart} alt="carrinho de compras" />
          </button>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}
