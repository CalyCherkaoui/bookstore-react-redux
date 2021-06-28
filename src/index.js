import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';
import { createStore } from 'redux';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Zadig ou la destinée',
      category: 'History',
    },
  ],
};

const store = createStore( rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
