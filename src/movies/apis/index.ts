import api from "../../api";

import type { Genre } from "../../types";
import type { MoviesResponse, Search } from "../types";

const getMovies = async (page: number, search?: Search) => {
  const params: { [key: string]: any } = { page };

  if (search) {
    [params["release_date.gte"]] = search.start.toISOString().split("T");
    [params["release_date.lte"]] = search.end.toISOString().split("T");
  }

  const { data: movies } = await api.get<MoviesResponse>("/discover/movie", {
    params,
  });

  return movies;
};

const getGenres = async () => {
  const {
    data: { genres },
  } = await api.get<{ genres: Genre[] }>("/genre/movie/list");

  return genres;
};

export { getMovies, getGenres };
