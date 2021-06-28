import React from 'react';
import './App.css';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

const App = () => {
  const books = [{ id: 1, title: 'xyz', category: 'sci' }];
  return (
    <div className="App">
      <BooksForm />
      <BooksList books={books} />
    </div>
  );
};

export default App;
