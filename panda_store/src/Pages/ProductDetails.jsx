import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <h4>Detalhes do Produto</h4>
        <br />
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <p>{`R$ ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
        <br />
        <h4>Mais Informações:</h4>
        <br />
        <p>
          {attributes.map((attribute) => (
            <div key={attribute.name}>
              <p className="uppercase">{`${attribute.name}: ${attribute.value_name}` }</p>
            </div>
          ))}
        </p>
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
