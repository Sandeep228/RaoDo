import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ExpandedItemsState = string[]; 

const initialState: ExpandedItemsState = [];

const expandedItemsSlice = createSlice({
  name: 'expandedItems',
  initialState,
  reducers: {
    toggleItemExpansion(state, action: PayloadAction<string>) {
      const itemIndex = state.indexOf(action.payload);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { toggleItemExpansion } = expandedItemsSlice.actions;
export default expandedItemsSlice.reducer;
