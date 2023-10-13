import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const USERS = 'users';
export const ADD_POST = 'addPost';

const reducer = (state = [], action) => {
  switch (action.type) {
    case USERS:
      return (state = action.payload);

    case 'addPost':
      let newPost = [...state, action.payload];
      return newPost;

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
