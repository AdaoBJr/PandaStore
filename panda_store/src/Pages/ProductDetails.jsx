import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title, thumbnail, price, attributes,
    } = product;
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
        <div className="areaButtons">
          <button
            type="button"
            className="buttonCart"
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
