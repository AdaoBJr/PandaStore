import React, { Component } from 'react';
import ElementsHome from '../Components/ElementsHome';
import Categories from '../Components/Categories';
import ProductsList from '../Components/ProductsList';
import * as api from '../service/api';
import * as func from '../service/globalFunctions';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      listCategories: [],
      products: [],
      query: '',
      fetchOn: false,
    };
  }

  componentDidMount() {
    this.categories();
    this.restoreFromLocalStorage();
  }

  restoreFromLocalStorage = () => {
    let localStorageCart = localStorage.getItem('LScart');
    if (localStorageCart) {
      localStorageCart = JSON.parse(localStorageCart);
      this.setState({
        cart: localStorageCart,
      });
    }
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
      fetchOn: true,
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
      fetchOn: true,
    });
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
    const {
      listCategories,
      products,
      cart,
      fetchOn,
    } = this.state;

    if (fetchOn) {
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
          <div className="Cards">
            <Categories
              categories={listCategories}
              handleClickCategory={this.handleClickCategory}
            />
            <ProductsList
              products={products}
              handleAddCart={this.addCart}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="pandaBG">
        <ElementsHome
          products={products}
          categories={listCategories}
          cart={cart}
          handleChange={this.handleChangeInput}
          handleClickInput={this.handleClickInput}
          handleClickCategory={this.handleClickCategory}
          handleAddCart={this.addCart}
        />
        <Categories
          categories={listCategories}
          handleClickCategory={this.handleClickCategory}
        />
      </div>
    );
  }
}
