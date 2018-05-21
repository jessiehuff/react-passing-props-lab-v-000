import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, onUpdateFilter}) => 
  <div className="fruit-basket">
    <Filter handleChange={onUpdateFilter} filters={filters} />
      <FilteredFruitList
        fruit={fruit} filter={currentFilter} />
  </div>;


FruitBasket.defaultProps = {
  fruit: [], 
  filters: [], 
  updateFilterCallback: () => {}, 
  currentFilter: null 
}


export default FruitBasket;
