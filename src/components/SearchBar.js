import React from 'react';

const SearchBar = ({handleSortChange, handleFilterChange}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name='sort' type="radio" value="Alphabetically" checked={null} onChange={(e) => handleSortChange(e)}/>
        Alphabetically
      </label>
      <label>
        <input name='sort' type="radio" value="Price" checked={null} onChange={(e) => handleSortChange(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilterChange(e)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
