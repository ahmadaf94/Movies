import { onMounted, ref } from "vue";

const useQuery = <T, ET = Error>(
  fn: (...args: any[]) => Promise<T>,
  options: {
    immediate: boolean;
    onSuccess?: (result: T) => void;
    onError?: (error: ET) => void;
  } = {
    immediate: true,
  }
) => {
  const isLoading = ref(false);
  const error = ref<ET>();
  const result = ref<T>();

  const call = (...args: any[]) => {
    isLoading.value = true;
    error.value = undefined;

    fn(...args)
      .then(
        (res) => {
          result.value = res;

          options.onSuccess?.(res);
        },
        (e) => {
          error.value = e;

          options.onError?.(e);
        }
      )
      .finally(() => {
        isLoading.value = false;
      });
  };

  onMounted(() => {
    if (options?.immediate) {
      call();
    }
  });

  return {
    isLoading,
    error,
    result,
    call,
  };
};

export default useQuery;
