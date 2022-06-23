import api from "../../api";

import type { Cast, MovieDetails } from "../types";

const getMovieDetails = async (movieId: string) => {
  const { data: movieDetails } = await api.get<MovieDetails>(
    `/movie/${movieId}`
  );

  return movieDetails;
};

const getMovieCast = async (movieId: string) => {
  const {
    data: { cast },
  } = await api.get<{ cast: Cast[] }>(`/movie/${movieId}/credits`);

  return cast;
};

export { getMovieDetails, getMovieCast };
