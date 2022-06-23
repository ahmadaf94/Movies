import axios from "axios";

import interceptors from "../interceptors";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIES_URI,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

interceptors.forEach((interceptor) => {
  axiosInstance.interceptors[interceptor.type].use(
    interceptor.onSuccess,
    interceptor.onError
  );
});

export default axiosInstance;
