import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../components/CharacterType/Character"

export const rickAndMortyApi = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: "https://rickandmortyapi.com/api/",
    }),
    keepUnusedDataFor: 10,
    tagTypes: ["Character"],
    endpoints: (build) => ({
      getCharacters: build.query<ApiResponse, number>({
        query: (page: number) => ({
          url: '/character',
          params: {
            page: page
          }
        }),
      }),
      
    }),
  });
  
  export const { useGetCharactersQuery } = rickAndMortyApi;
  
  
  
  
  
  
/* getCharacterById: build.query<ApiResponse, number>({
  query: (id: number) => `/character/${id}`,
  providesTags: (result, error, id) => [{ type: "Character", id }],
}), */