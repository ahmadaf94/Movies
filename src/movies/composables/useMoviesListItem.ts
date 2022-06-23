import { computed } from "vue";

import { useConfigProvider } from "../../composables/useConfig";

import { Genre } from "../../types";
import { MovieListItem } from "../types";

const useMoviesListItem = (props: {
  movie: MovieListItem;
  genres: Genre[];
}) => {
  const genereNames = computed(() =>
    props.movie.genre_ids.map(
      (genereId) =>
        props.genres?.find((genere) => genere.id === genereId)?.name || ""
    )
  );

  const baseImageURL = useConfigProvider();

  const posterImageURL = computed(() =>
    baseImageURL?.value
      ? `${baseImageURL?.value}w185${props.movie.poster_path}`
      : ""
  );

  return {
    genereNames,
    posterImageURL,
  };
};

export default useMoviesListItem;
