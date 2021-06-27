import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    },
  ).isRequired,
};

export default Book;
