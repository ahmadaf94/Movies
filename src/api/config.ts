import axiosInstance from ".";

import type { ConfigurationResponse } from "../types";

const getConfig = async () => {
  const { data: config } = await axiosInstance.get<ConfigurationResponse>(
    "/configuration"
  );

  return config;
};

export default getConfig;
