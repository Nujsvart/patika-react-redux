import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=10`
    );

    return data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default charactersSlice.reducer;
