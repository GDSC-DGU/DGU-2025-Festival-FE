import axios from "axios";
import { applyInterceptors } from "./request";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LAMBDA_BASE_URL = import.meta.env.VITE_LAMBDA_BASE_URL;

// 일반 서버 주소로 요청 보낼 시
const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

// 람다 주소로 요청 보낼 시
const lambdaInstance = axios.create({
  baseURL: LAMBDA_BASE_URL,
});

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
const adminInstance = axios.create(defaultInstance.defaults);
adminInstance.defaults.baseURL += "/admin";
applyInterceptors(adminInstance);

const adminLambdaInstance = axios.create(lambdaInstance.defaults);
adminLambdaInstance.defaults.baseURL += "/admin";
applyInterceptors(adminLambdaInstance);

export { defaultInstance, lambdaInstance, adminInstance, adminLambdaInstance };
