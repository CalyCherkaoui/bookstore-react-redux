/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => {
  const categoriesList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" name="title" id="title" />

        <label>
          Select a category :
          <select name="category" id="category">
            {
              categoriesList.map(
                (category) => (
                  <option key="category" value={category}>{category}</option>
                ),
              )
            }
          </select>
        </label>
        <button type="submit">+ Add Book to you Book-store</button>
      </form>
    </div>
  );
};

export default BooksForm;
