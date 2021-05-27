import React, { Component } from 'react';

export default class ElementsHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          placeholder="insert a product"
          type="text"
        />
        <button
          type="button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
