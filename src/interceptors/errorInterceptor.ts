import { Interceptor, InterceptorType } from "../types";

const errorInterceptor: Interceptor = {
  onSuccess: undefined,
  onError: (error: any) => {
    if (error.response?.data?.status_message) {
      error.message = error.response.data.status_message;

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
  type: InterceptorType.response,
};

export default errorInterceptor;
