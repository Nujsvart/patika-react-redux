import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const charLimit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async page => {
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_API_BASE_ENDPOINT
      }/characters?limit=${charLimit}&offset=${charLimit * page}`
    );

    return data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = "succeeded";
      state.page += 1;
      console.log(action.payload);
      if (action.payload.length < charLimit) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setPage } = charactersSlice.actions;

export default charactersSlice.reducer;
