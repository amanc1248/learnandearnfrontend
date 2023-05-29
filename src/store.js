// store.js

import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    course: courseReducer
  },
  // Other store configuration options if needed
});

export default store;
