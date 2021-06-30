/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const removeBookHandler = (book) => {
    removeBook(book);
  };

  const filtredBookslist = (filter !== 'All')
    ? books.filter((book) => book.category === filter)
    : books;

  return (
    <div>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            filtredBookslist.map(
              (book) => (
                <Book key={book.id} book={book} removeBookHandler={removeBookHandler} />),
            )
          }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => (
  {
    books: state.books,
    filter: state.filter,
  }
);

const mapDispatchToProps = {
  removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
