// reducers/cartReducer.js

import { createSlice } from '@reduxjs/toolkit';
const contentSlie = createSlice({
  name: 'entireCourse',
  initialState: [],
  reducers: {
    nextContent: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    previousContent: (state, action)=>{
        console.log("Set previous content")
    },
    setEntireContent: (state, action)=>{
        state = action.payload
    }
    // removeItem: (state, action) => {
    //   const itemId = action.payload;
    //   const index = state.findIndex(item => item.id === itemId);
    //   if (index !== -1) {
    //     state.splice(index, 1);
    //   }
    // },
    // updateItemQuantity: (state, action) => {
    //   const { itemId, quantity } = action.payload;
    //   const item = state.find(item => item.id === itemId);
    //   if (item) {
    //     item.quantity = quantity;
    //   }
    // },
  },
});

export const { setEntireContent } = contentSlie.actions;

export default contentSlie.reducer;
