import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBookHandler }) => (
  <div className="book_box">
    <div className="book_box_left">
      <div className="book_info">
        <p className="book_info_category">{book.category}</p>
        <p className="book_info_title">{book.title}</p>
        <p className="book_info_author">Author</p>
      </div>
      <div className="book_editor">
        <button className="book_editor_comment" type="button">Comment</button>
        <button
          className="book_editor_button"
          type="button"
          onClick={() => removeBookHandler(book)}
        >
          Remove
        </button>
        <button
          className="book_editor_button"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="book_box_right">
      <button
        type="button"
        onClick={
          () => removeBookHandler(book)
        }
      >
        Remove Book
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    },
  ).isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default Book;
