import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from "./charactersSlice";
import quotesSlice from "./quotesSlice";

const store = configureStore({
  reducer: {
    characters: charactersSlice,
    quotes: quotesSlice.reducer,
  },
});

export default store;
