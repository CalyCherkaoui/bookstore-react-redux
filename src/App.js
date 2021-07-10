import React from 'react';
import './App.css';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
