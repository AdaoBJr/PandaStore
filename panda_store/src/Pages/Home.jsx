import React, { Component } from 'react';
import Categories from '../Components/Categories';
import ElementsHome from '../Components/ElementsHome';
import * as api from '../service/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
      products: [],
      search: '',
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

  getProducts = async ({ categoryId, search }) => {
    const displayProduct = await api.getProductBySearchBar(categoryId, search);
    return displayProduct;
  }

  handleClickCategory = async ({ target: { value } }) => {
    const { search } = this.state;
    console.log(value);
    const products = await this.getProducts(value, search);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { listCategories, products } = this.state;
    return (
      <div>
        <ElementsHome
          products={products}
        />
        <Categories
          categories={listCategories}
          handleClick={this.handleClickCategory}
        />
      </div>
    );
  }
}
