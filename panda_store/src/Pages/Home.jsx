import React, { Component } from 'react';
import ElementsHome from '../Components/ElementsHome';
import * as api from '../service/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
      products: [],
      query: '',
      cart: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  categories = async () => {
    const data = await api.getCategories();
    this.setState({
      listCategories: data,
    });
  }

  getProducts = async ({ categoryId, query }) => {
    const displayProduct = await api.getProductBySearchBar(categoryId, query);
    return displayProduct;
  }

  handleClickCategory = async ({ target: { value } }) => {
    const { query } = this.state;
    const categoryId = value;
    const searchByCategories = await this.getProducts({ categoryId, query });
    this.setState({
      products: searchByCategories.results,
    });
  }

  handleChangeInput = ({ target: { value } }) => {
    this.setState({
      query: value,
    });
  }

  handleClickInput = async () => {
    const { query } = this.state;
    const categoryId = '';
    const searchByCategories = await this.getProducts({ categoryId, query });
    this.setState({
      products: searchByCategories.results,
    });
  }

  // addCart = (product) => {
  //   const { cart } = this.state;
  //   this.setState({
  //     cart: [...cart, product],
  //   });
  // }

  addCart = (product) => {
    const { cart } = this.state;
    const {
      id, title, thumbnail, price,
    } = product;
    if (!cart.length) {
      const productCart = [{
        id, title, thumbnail, price, count: 1,
      }];
      this.setState({
        cart: productCart,
      });
    } else {
      let productCart = cart;
      const findProduct = productCart.find((item) => item.id === product.id);
      if (findProduct) {
        const key = productCart.indexOf(findProduct);
        productCart[key].count += 1;
        this.setState({
          cart: productCart,
        });
      } else {
        productCart = [...productCart, {
          id, title, thumbnail, price, count: 1,
        }];
        this.setState({
          cart: productCart,
        });
      }
    }
  }

  render() {
    const { listCategories, products, cart } = this.state;
    return (
      <div>
        <ElementsHome
          products={products}
          categories={listCategories}
          cart={cart}
          handleChange={this.handleChangeInput}
          handleClickInput={this.handleClickInput}
          handleClickCategory={this.handleClickCategory}
          handleAddCart={this.addCart}
        />
      </div>
    );
  }
}
