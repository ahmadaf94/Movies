import { useRoute } from "vue-router";

import { getMovieDetails } from "../apis";

import useQuery from "../../composables/useQuery";

const useMovieDetails = () => {
  const {
    params: { id: movieId },
  } = useRoute();

  const { call, error, isLoading, result } = useQuery(() =>
    getMovieDetails(movieId as string)
  );

  return {
    retry: call,
    error,
    isLoading,
    details: result,
  };
};

export default useMovieDetails;
