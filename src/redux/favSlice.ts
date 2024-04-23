import { createSlice } from '@reduxjs/toolkit';
import { FavChar } from '../models/Character';

export const favSlice = createSlice({
  name: 'favorite',
  initialState: {
    characters: [] as FavChar[],
  },
  reducers: {
    addFavoriteCharacter(state, action: { payload: FavChar }) {
      state.characters.push(action.payload);
    },
    removeFavoriteChar(state, action: {payload: number}) {
        state.characters = state.characters.filter((character => character.id !== action.payload))
    }
  },
});

export const { addFavoriteCharacter, removeFavoriteChar } = favSlice.actions;
export const favReducer = favSlice.reducer;