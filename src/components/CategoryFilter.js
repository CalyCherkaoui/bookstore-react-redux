import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

const CategoryFilter = ({ changeFilterHandle }) => {
  const categoriesList = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilterHandler = (e) => {
    changeFilterHandle(e.target.value);
  };

  return (
    <div className="navigation_container">
      <div className="navigation_left">
        <div className="navigation_logo">Bookstore CMS</div>
        <div className="navigation_books">books</div>
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
      <div className="navigation_right">
        <IconContext.Provider value={{ color: '#0290ff', className: 'global-class-name' }}>
          <div>
            <FaUserCircle />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilterHandle: PropTypes.func.isRequired,
};

export default CategoryFilter;
