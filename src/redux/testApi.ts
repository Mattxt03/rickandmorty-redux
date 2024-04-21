import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Movie = {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
};

export const MoviesApi = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: "https://raw.githubusercontent.com/andrea689/flutter_course/main/exams/videoteca",
    }),
    keepUnusedDataFor: 10,
    tagTypes: ["Movies"],
    endpoints: (build) => ({
      getMovies: build.query<Movie[], void>({
        query: () => "/movies",
        providesTags: ["Movies"],
      }),
    }),
  });
  
  export const { useGetMoviesQuery } = MoviesApi;