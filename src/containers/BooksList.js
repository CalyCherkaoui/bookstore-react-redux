import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
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
          books.map(
            (book) => (<Book key={book.id} book={book} />),
          )
        }
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => (
  {
    books: state.books,
  }
);

export default connect(mapStateToProps)(BooksList);
