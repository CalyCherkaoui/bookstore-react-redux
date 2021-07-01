/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const categoriesList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      id: Math.floor(Math.random() * 1000),
      title,
      category,
    });
    setTitle('');
  };

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  return (
    <div className="add_book_form_container">
      <div className="form_title">ADD NEW BOOK:</div>
      <form className="form_wrapper">
        <input
          className="form_input_book_title"
          type="text"
          placeholder="Add the Book Title Here"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />

        <select
          className="form_input_category_select"
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
        <button
          className="form_submit_button"
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

const mapDispatchToProps = {
  createBook,
};

BooksForm.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  createBook: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
