import { computed, ref } from "vue";

import { getMovies } from "../apis";

import useQuery from "../../composables/useQuery";

import type { Search } from "../types";

const RESULTS_PER_PAGE = 20;

const pageNumber = ref(1);
const searchFilter = ref<Search>();

const useMovies = () => {
  const totalPages = ref(1);
  const totalResults = ref(0);

  const { call, error, isLoading, result } = useQuery(
    () => getMovies(pageNumber.value, searchFilter.value),
    {
      immediate: true,

      onSuccess: (res) => {
        totalPages.value = res.total_pages;
        totalResults.value = res.total_results;
      },
    }
  );

  const lastPageItem = computed(() => pageNumber.value * RESULTS_PER_PAGE);

  const isFirstPage = computed(() => pageNumber.value === 1);
  const isLastPage = computed(() => lastPageItem.value >= totalResults.value);

  const itemsRange = computed(() => {
    const lastItem = isLastPage.value ? totalResults.value : lastPageItem.value;
    const firstItem = lastPageItem.value - RESULTS_PER_PAGE + 1;

    return `${firstItem} - ${lastItem}`;
  });

  const goNextPage = () => {
    pageNumber.value += 1;

    call();
  };

  const goPrevPage = () => {
    pageNumber.value -= 1;

    call();
  };

  const movies = computed(() => result.value?.results || []);

  const searchMovies = (searchDates: Search | undefined) => {
    pageNumber.value = 1;
    searchFilter.value = searchDates;

    call();
  };

  return {
    movies,
    error,
    isLoading,
    isFirstPage,
    isLastPage,
    itemsRange,

    retry: call,
    goNextPage,
    goPrevPage,
    searchMovies,
  };
};

export default useMovies;
