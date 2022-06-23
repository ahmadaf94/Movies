import { computed } from "vue";
import { useRoute } from "vue-router";

import { getMovieCast } from "../apis";

import useQuery from "../../composables/useQuery";

const useMovieDetailsCast = () => {
  const {
    params: { id: movieId },
  } = useRoute();

  const { call, error, isLoading, result } = useQuery(() =>
    getMovieCast(movieId as string)
  );

  const sortedCast = computed(() => {
    const safeResult = result.value || [];
    return (
      safeResult
        .sort((castA, castB) => castB.popularity - castA.popularity)
        .slice(0, 10)
        .map((cast) => cast.name)
        .join(", ") +
      (safeResult.length - 10 > 0 ? ` and ${safeResult.length - 10} more` : "")
    );
  });

  return {
    retry: call,
    error,
    isLoading,
    sortedCast,
  };
};

export default useMovieDetailsCast;
