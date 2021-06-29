import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBookHandler }) => {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={
            () => removeBookHandler(book)
          }
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
};

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
