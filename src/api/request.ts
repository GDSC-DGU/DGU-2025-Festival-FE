import { useAuthStore } from "@/stores/useAuthStore";
import axios from "axios";

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
  error: unknown;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const sendRequest = async <T = unknown, D = unknown>(
  instance: AxiosInstance,
  method: Method,
  url: string,
  data?: D
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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        `❌ ${url} [${method}] Error:`,
        error.response?.data || error.message
      );
      throw error; // 원래 AxiosError를 그대로 던짐
    }

    console.error(`❌ ${url} [${method}] Unknown error:`, error);
    throw new Error("예상치 못한 오류가 발생했습니다.");
  }
};

// 동적 URL 생성
// ex) createUrl("/losts", { tag: "CLOTH" }); => /losts?tag=CLOTH
export const createUrl = (
  path: string,
  params: Record<string, string> = {}
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
      // window.location.href = "/admin";
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
