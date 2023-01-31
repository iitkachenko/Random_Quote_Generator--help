import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quotesData } from "../components/Quotes";

const initialState: {
  data: quotesData[];
} = {
  data: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});

// export const { setQuotes, setStatus } = quotesSlice.actions;
export default tagsSlice.reducer;

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const res = await fetch("https://api.quotable.io/tags");
  const data = await res.json();
  return data;
});


