import { createSlice } from "@reduxjs/toolkit";
const initialState: any[] = [];

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
