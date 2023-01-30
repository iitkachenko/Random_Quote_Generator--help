import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarksSlice"
import quotesSlice from "./quotesSlice";

const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
        quotes: quotesSlice,
    }
})

export default store
export type AppDispatch = typeof store.dispatch