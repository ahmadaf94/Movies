import { AxiosRequestConfig, AxiosResponse } from "axios";

export type ConfigurationResponse = {
  images: {
    base_url: string;
  };
};

export enum InterceptorType {
  request = "request",
  response = "response",
}

export type Interceptor = {
  onSuccess:
    | (((
        value: AxiosRequestConfig<any>
      ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) &
        ((value: AxiosResponse) => AxiosResponse | Promise<any>))
    | undefined;
  onError: ((error: any) => any) | undefined;
  type: InterceptorType;
};

export type Genre = {
  id: number;
  name: string;
};
