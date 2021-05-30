import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { cart } = this.props;
    // const { title, thumbnail, price } = product;

    return (
      <div>
        <h3>Carrinho de Compras</h3>
        <h5>Seu carrinho está vazio.</h5>
      </div>
    );
  }
}
