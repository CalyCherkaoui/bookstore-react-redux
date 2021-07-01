import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilterHandle }) => {
  const categoriesList = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilterHandler = (e) => {
    changeFilterHandle(e.target.value);
  };

  return (
    <div>
      Filter by category:
      <select
        name="filter"
        id="filter"
        onChange={changeFilterHandler}
      >
        {
          categoriesList.map(
            (category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ),
          )
        }
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilterHandle: PropTypes.func.isRequired,
};

export default CategoryFilter;
