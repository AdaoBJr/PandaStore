import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { categories } = this.props;
    const { name, id } = categories;
    return (
      <div>
        {categories.map((categorie) => key={id}
        <button
          type="button"
          value={id}
        >
          {name}
        </button>
      </div>
    ));
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
