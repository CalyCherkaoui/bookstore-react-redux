import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';

const IdGenerator = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    {
      id: IdGenerator(),
      title: 'Zadig ou la destinée',
      category: 'History',
    },
    {
      id: IdGenerator(),
      title: 'Journey to the Center of the Earth',
      category: 'Sci-Fi',
    },
    {
      id: IdGenerator(),
      title: 'Samarkande',
      category: 'Biography',
    },
    {
      id: IdGenerator(),
      title: 'The name of the rose',
      category: 'Action',
    },
    {
      id: IdGenerator(),
      title: 'Pastiche et postiche',
      category: 'Philosophy',
    },
    {
      id: IdGenerator(),
      title: 'Thus Spoke Zarathustra',
      category: 'Philosophy',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
