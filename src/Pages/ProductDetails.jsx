import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as func from '../service/globalFunctions';
import imgCart from '../images/cart.png';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addCart = (product) => {
    const { cart } = this.state;
    const productCart = func.addCartRefact(product, cart);
    this.setState({
      cart: productCart,
    });
    localStorage.setItem('LScart', JSON.stringify(productCart));
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title, thumbnail, price, attributes,
    } = product;
    const { cart } = this.state;
    return (
      <div className="ProductDetails">
        <div className="details">
          <h4>DETALHES DO PRODUTO</h4>
          <br />
          <p className="title">{title}</p>
          <img src={thumbnail} alt={title} />
          <p className="price">{`R$ ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
          <br />
        </div>
        <div className="moreInformations">
          <h4>MAIS INFORMAÇÕES:</h4>
          <br />
          {attributes.map((attribute) => (
            <div key={attribute.name}>
              <p className="uppercase">{`${attribute.name}: ${attribute.value_name}` }</p>
            </div>
          ))}
        </div>
        <div className="areaButtonsDetails">
          <button
            type="button"
            className="buttonCart"
            onClick={() => this.addCart(product)}
          >
            Adicionar
          </button>
          <button
            type="button"
            className="buttonHome"
          >
            <Link to="/">
              Home
            </Link>
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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }),
    }),
  }).isRequired,
};
