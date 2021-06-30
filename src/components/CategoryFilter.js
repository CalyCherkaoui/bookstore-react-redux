import React from 'react';

const CategoryFilter = () => {
  const categoriesList = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      Filter by categoriy:
      <select>
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

export default CategoryFilter;
