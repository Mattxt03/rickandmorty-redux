import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, CharacterModel } from "../components/models/Character"

export const rickAndMortyApi = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: "https://rickandmortyapi.com/api/",
    }),
    keepUnusedDataFor: 10,
    tagTypes: ["Character"],
    endpoints: (build) => ({
      getCharacters: build.query<ApiResponse, number>({
        query: (page = 1) => `character?page=${page}`
      }),
      getCharactersById: build.query<CharacterModel, number>({
        query: (id: number) => `character/${id}`
      }),
      
    }),
  });
  
  export const { useGetCharactersQuery, useGetCharactersByIdQuery } = rickAndMortyApi;
  
  
  
  
  
  
/* getCharacterById: build.query<ApiResponse, number>({
  query: (id: number) => `/character/${id}`,
  providesTags: (result, error, id) => [{ type: "Character", id }],
}), */