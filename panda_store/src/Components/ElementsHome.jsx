import React, { Component } from 'react';
import lupa from '../images/lupa.png';

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
            <img src={lupa} alt="pesquisar" width="25px" />
          </button>
        </div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}
