import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quotesData } from "../components/Quotes";

export enum Status {
  LOADING = "loading",
  IDLE = "idle",
  ERROR = "error",
}

const initialState: {
  data: object[];
  status: Status;
} = {
  data: [],
  status: Status.IDLE,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        console.log(action.payload);

        state.data = action.payload;
        state.status = Status.IDLE;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = Status.ERROR;
      });
  },
});

// export const { setQuotes, setStatus } = quotesSlice.actions;
export default tagsSlice.reducer;

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const res = await fetch("https://api.quotable.io/tags");
  const data = await res.json();
  return data;
});
