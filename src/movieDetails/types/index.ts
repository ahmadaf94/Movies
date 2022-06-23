import { Genre } from "../../types";

export type MovieDetails = {
  title: string;
  tagline: string;
  budget: number;
  revenue: number;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  imdb_id: string;
  homepage: string;
  poster_path: string;
  overview: string;
};

export type Cast = {
  name: string;
  popularity: number;
};
