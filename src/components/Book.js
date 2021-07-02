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
      <div className="stats_wrapper">
        <div className="stats_graph">gaph</div>
        <div className="stats_text">
          <div className="stats_text_percentage">64%</div>
          <div className="stats_text_comment">completed</div>
        </div>
      </div>
      <div className="progress_wrapper">
        <p className="progress_current_chapter">Current chapter</p>
        <p className="progress_chapter_read">Chapter 17</p>
        <button
          className="progress_update_btn"
          type="button"
        >
          update progress
        </button>
      </div>
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
