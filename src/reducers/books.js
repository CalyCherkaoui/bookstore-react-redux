import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initalState = [];

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
