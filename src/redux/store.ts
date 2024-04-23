import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "./ramApi";
import { themeReducer } from "./themeSlice";
import { favReducer } from "./favSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

store.subscribe(() => {
  console.log(
    "Lo stato dell'applicazione è stato aggiornato:",
    store.getState()
  );
});

export type State = ReturnType<typeof store.getState>;