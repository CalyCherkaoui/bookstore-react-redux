/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const BooksForm = () => {
  const categoriesList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            placeholder="Add the Book Title Here"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="category">
          Select a category :
          <select
            name="category"
            id="category"
            onChange={handleChange}
          >
            {
              categoriesList.map(
                (category) => (
                  <option key="category" value={category}>{category}</option>
                ),
              )
            }
          </select>
        </label>
        <button
          type="submit"
          name="submit"
          onclick={handleSubmit}
        >
          + Add Book to you Book-store
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
