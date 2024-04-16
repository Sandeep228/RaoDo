import { configureStore } from '@reduxjs/toolkit';
import expandedItemsReducer from './features/expandedItems';

//this is the redux store

export const store = configureStore({
  reducer: {
    expandedItems: expandedItemsReducer,
  },
});
