import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`
  );

  return data;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export default quotesSlice;
