import { computed, ComputedRef, inject, provide } from "vue";

import getConfig from "../api/config";

import useQuery from "./useQuery";

const IMAGE_BASE_URL_KEY = Symbol("image base url");

export const useConfigProvider = () => {
  const imageBaseUrl =
    inject<ComputedRef<string | undefined>>(IMAGE_BASE_URL_KEY);

  return imageBaseUrl;
};

const useConfig = () => {
  const { error, isLoading, call, result } = useQuery(getConfig);

  const imageBaseUrl = computed(() => result.value?.images.base_url);

  provide(IMAGE_BASE_URL_KEY, imageBaseUrl);

  return {
    error,
    isLoading,
    retry: call,
  };
};

export default useConfig;
