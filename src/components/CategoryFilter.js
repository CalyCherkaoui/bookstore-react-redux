import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilterHandle }) => {
  const categoriesList = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilterHandler = (e) => {
    changeFilterHandle(e.target.value);
  };

  return (
    <div className="navigation_container">
      <div className="navigation_left">
        <div className="navigation_logo">Bookstore CMS</div>
        <select
          className="categories_selector"
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
      <div className="navigation_right">avatar</div>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilterHandle: PropTypes.func.isRequired,
};

export default CategoryFilter;
