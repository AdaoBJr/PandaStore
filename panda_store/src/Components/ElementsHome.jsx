import React, { Component } from 'react';
import lupa from '../images/lupa.png';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          placeholder="Insira um produto"
          type="text"
        />
        <button
          type="button"
        >
          <img src={lupa} alt="pesquisar" width="25px" />
        </button>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      </div>
    );
  }
}
