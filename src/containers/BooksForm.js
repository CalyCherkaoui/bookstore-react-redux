/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { createBook } from '../actions'

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory ] = useState('');
  const categoriesList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleSubmit = () => {
    createBook({
      id: 0,
      title,
      category,
    });
    setTitle('');
  };

  const handleChange = (e) => {
    if (e.target.is === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

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
          onClick={handleSubmit}
        >
          + Add Book to you Book-store
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
