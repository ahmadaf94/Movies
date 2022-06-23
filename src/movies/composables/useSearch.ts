import { ref } from "vue";

import type { Search } from "../types";

const searchDates = ref<Search>();

const useSearch = () => {
  const clearSearch = () => {
    searchDates.value = undefined;
  };

  return {
    searchDates,
    clearSearch,
  };
};

export default useSearch;
