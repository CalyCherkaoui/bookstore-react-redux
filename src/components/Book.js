import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const Book = ({ book, removeBookHandler }) => (
  <div className="book_box">
    <div className="book_box_left">
      <div className="book_info">
        <p className="book_info_category bold_typography">{book.category}</p>
        <p className="book_info_title bold_typography">{book.title}</p>
        <p className="book_info_author normal_typography">Author</p>
      </div>
      <div className="book_editor">
        <button className="book_editor_comment normal_typography" type="button">Comment</button>
        <button
          className="book_editor_button normal_typography"
          type="button"
          onClick={() => removeBookHandler(book)}
        >
          Remove
        </button>
        <button
          className="book_editor_button normal_typography"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="book_box_right">
      <div className="stats_wrapper">
        <div className="stats_graph">
          <ProgressBar
            percentage={64}
            size={80}
            strokeWidth={10}
            innCircleStroke="#f5f6fa" // gray bg
            exoCircleStroke="#379cf6" // blue progress
          />
        </div>
        <div className="stats_text">
          <div className="stats_text_percentage normal_typography">64%</div>
          <div className="stats_text_comment normal_typography">completed</div>
        </div>
      </div>
      <div className="progress_wrapper">
        <p className="progress_current_chapter normal_typography">Current chapter</p>
        <p className="progress_chapter_read normal_typography">Chapter 17</p>
        <button
          className="progress_update_btn blue_btn_typography"
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
