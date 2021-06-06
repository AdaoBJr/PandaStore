import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { cart } } } = this.props;
    this.state = {
      shoppingCart: cart,
      updateSum: true,
      totalSum: 0,
    };
  }

  componentDidMount() {
    this.totalSumProducts();
    this.restoreFromLocalStorage();
  }

  componentDidUpdate() {
    this.totalSumProducts();
  }

  restoreFromLocalStorage = () => {
    let localStorageCart = localStorage.getItem('LScart');
    if (localStorageCart) {
      localStorageCart = JSON.parse(localStorageCart);
      this.setState({
        shoppingCart: localStorageCart,
      });
    }
  }

  totalSumProducts = () => {
    const { shoppingCart, updateSum } = this.state;
    if (updateSum) {
      const valueSum = shoppingCart.reduce((acc, value) => acc + value.totalValue, 0);
      this.setState({
        totalSum: valueSum,
        updateSum: false,
      });
    }
  }

  increaseQuantity = (id) => {
    const { shoppingCart } = this.state;
    const productCart = shoppingCart;
    const findProduct = productCart.find((item) => item.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
    this.setState({
      shoppingCart: productCart,
      updateSum: true,
    });
    localStorage.setItem('LScart', JSON.stringify(productCart));
  }

  decreaseQuantity = (id) => {
    const { shoppingCart } = this.state;
    const productCart = shoppingCart;
    const findProduct = productCart.find((item) => item.id === id);
    const key = productCart.indexOf(findProduct);
    if (productCart[key].count > 1) {
      productCart[key].count -= 1;
      productCart[key].totalValue = Math.round((productCart[key].count
        * productCart[key].price) * 100) / 100;
      this.setState({
        shoppingCart: productCart,
        updateSum: true,
      });
      localStorage.setItem('LScart', JSON.stringify(productCart));
    }
  }

  removeItem = (id) => {
    const { shoppingCart } = this.state;
    const productCart = shoppingCart;
    const updatedCart = productCart.filter((item) => item.id !== id);
    this.setState({
      shoppingCart: updatedCart,
      updateSum: true,
    });
    localStorage.setItem('LScart', JSON.stringify(updatedCart));
  }

  clearProducts = () => {
    const updatedCart = [];
    this.setState({
      shoppingCart: updatedCart,
      updateSum: true,
    });
    localStorage.setItem('LScart', JSON.stringify(updatedCart));
  }

  render() {
    const { shoppingCart, totalSum } = this.state;
    const haveCart = shoppingCart.length;
    if (!haveCart) {
      return (
        <div className="cartEmpty">
          <div>
            <h3>Carrinho de Compras</h3>
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
      <div className="cartFull">
        <div className="itemsCart">
          {shoppingCart.map(({
            id, title, price, thumbnail, availableQuantity, count, totalValue,
          }) => (
            <div key={id}>
              <div className="itemCart">
                <h4 className="title">{title}</h4>
                <img src={thumbnail} alt={title} />
                <h4>
                  {`Qtide: ${count
                    .toLocaleString('pt-br', { minimumFractionDigits: 1 })}`}
                </h4>
                <h4 className="price">
                  {`Preço: R$ ${price
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                </h4>
                <h3 className="totalValue">
                  Total R$:
                  {
                    totalValue
                      .toLocaleString('pt-br', { minimumFractionDigits: 2 })
                  }
                </h3>

                <div className="itemButtons">
                  <button
                    className="increase"
                    type="button"
                    disabled={count >= availableQuantity}
                    onClick={() => this.increaseQuantity(id)}
                  >
                    +
                  </button>
                  <button
                    className="decrease"
                    type="button"
                    onClick={() => this.decreaseQuantity(id)}
                  >
                    -
                  </button>
                  <button
                    className="remove"
                    type="button"
                    onClick={() => this.removeItem(id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCheckout"
          >
            <Link
              to={{ pathname: '/checkout', state: { shoppingCart, totalSum } }}
            >
              Finalizar Compra
            </Link>
          </button>
          <button
            type="button"
            className="buttonClear"
            onClick={this.clearProducts}
          >
            Limpar Produtos
          </button>
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
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
