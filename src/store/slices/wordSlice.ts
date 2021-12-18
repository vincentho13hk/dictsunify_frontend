import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { act } from "react-dom/test-utils";
import type { RootState } from "../store";

interface WordState {
  currentWord: string;
  dictionaries: string[];
}

const initialState: WordState = {
  currentWord: "",
  dictionaries: [],
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    searchWord: (state, action: PayloadAction<string>) => {
      state.currentWord = action.payload;
    },
    updateDictionaryList: (state, action: PayloadAction<string[]>) => {
      state.dictionaries = action.payload;
    },
  },
});

export const { searchWord, updateDictionaryList } = wordSlice.actions;

export const selectedWord = (state: RootState) => state.word.currentWord;
export const supportedDictionaries = (state: RootState) =>
  state.word.dictionaries;

export default wordSlice.reducer;
