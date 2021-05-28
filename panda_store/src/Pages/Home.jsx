import React, { Component } from 'react';
import Categories from '../Components/Categories';
import ElementsHome from '../Components/ElementsHome';
import * as api from '../service/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
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

  render() {
    const { listCategories } = this.state;
    return (
      <div>
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <ElementsHome />
        <Categories categories={listCategories} />
      </div>
    );
  }
}
