import { useAuthStore } from "@/stores/useAuthStore";

import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  Method,
  AxiosResponse,
} from "axios";

interface ApiSuccess<T> {
  success: true;
  data: T;
  error: null;
}

interface ApiFailure {
  success: false;
  data: null;
  error: any;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const sendRequest = async <T = any>(
  instance: AxiosInstance,
  method: Method,
  url: string,
  data?: any
): Promise<ApiResponse<T>> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      ...(method.toUpperCase() === "GET" ? { params: data } : { data }),
    };

    const response: AxiosResponse<ApiResponse<T>> =
      await instance.request(config);

    const responseData = response.data;
    console.log(`✅ ${url} [${method}] Success:`, responseData);

    return responseData;
  } catch (error: any) {
    console.error(
      `❌ ${url} [${method}] Error:`,
      error?.response?.data || error
    );
    throw error;
  }
};

// 동적 URL 생성
// ex) createUrl("/losts", { tag: "CLOTH" }); => /losts?tag=CLOTH
export const createUrl = (
  path: string,
  params: Record<string, any> = {}
): string => {
  const query = new URLSearchParams(params).toString();
  return `${path}${query ? `?${query}` : ""}`;
};

// 인터셉터 적용
export const applyInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = useAuthStore.getState().token;

      // admin 로그인 전에는 인터셉터 제외
      const excludedPaths = ["/admin/login"];

      const isExcluded = excludedPaths.some((path) =>
        config.url?.includes(path)
      );

      if (isExcluded) return config;

      if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
        return config;
      }
      window.location.href = "/admin";
      return config;
    },
    (error) => {
      console.error("🚨 Request Interceptor Error:", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("🚨 Response Interceptor Error:", error?.response);
      return Promise.reject(error);
    }
  );
};
