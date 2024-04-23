import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, CharacterModel } from "../models/Character"
import { EpisodeApiRes } from "../models/Episode";
import { LocationApiRes } from "../models/Location";

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
      getEpisodes: build.query<EpisodeApiRes, number>({
        query: (page = 1) => `episode?page=${page}`
      }),
      getLocations: build.query<LocationApiRes, number>({
        query: (page = 1) => `location?page=${page}`
      }),
      
    }),
  });
  
  export const { useGetCharactersQuery, useGetCharactersByIdQuery, useGetEpisodesQuery, useGetLocationsQuery } = rickAndMortyApi;