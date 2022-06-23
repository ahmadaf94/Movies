import { computed } from "vue";

import { useConfigProvider } from "../../composables/useConfig";

import constants from "../../constants";
import { formatCurrency, minutesToTime } from "../../utils";

import type { MovieDetails } from "../types";

const useMovieDetailsContent = (details: MovieDetails) => {
  const baseImageURL = useConfigProvider();

  const posterImageURL = computed(() =>
    baseImageURL?.value
      ? `${baseImageURL?.value}w500${details.poster_path}`
      : ""
  );

  const budget = computed(() => formatCurrency(details.budget));

  const revenue = computed(() => formatCurrency(details.revenue));

  const runtime = computed(() => minutesToTime(details.runtime));

  const score = computed(
    () => `${details.vote_average} (${details.vote_count} votes)`
  );

  const genres = computed(() =>
    details.genres.map((genre) => genre.name).join(", ")
  );

  const imdbLink = computed(() => `${constants.IMDB_URL}${details.imdb_id}`);

  return {
    budget,
    revenue,
    runtime,
    score,
    genres,
    imdbLink,
    posterImageURL,
  };
};

export default useMovieDetailsContent;
