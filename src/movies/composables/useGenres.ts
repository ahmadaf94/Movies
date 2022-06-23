import { computed } from "vue";

import { getGenres } from "../apis";

import useQuery from "../../composables/useQuery";

const useGenres = () => {
  const { result } = useQuery(getGenres);

  const generes = computed(() => result.value || []);

  return {
    generes,
  };
};

export default useGenres;
