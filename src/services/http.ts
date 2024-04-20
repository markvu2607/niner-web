import { cookies } from "next/headers";

import config from "@/configs/config";

const request = async <T>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  options?: RequestInit
) => {
  const cookieStore = cookies();
  const baseHeaders = {
    "Content-Type": "application/json",
    Authorization: cookieStore.get("accessToken")?.value
      ? `Bearer ${cookieStore.get("accessToken")?.value}`
      : "",
  };

  const fullUrl = url.startsWith("http") ? url : `${config.apiUrl}${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    method,
  });

  const payload = await res.json();

  const data: T = {
    status: res.status,
    ...payload,
  };

  return data;
};

const http = {
  get: <T>(url: string, options?: RequestInit) =>
    request<T>("GET", url, options),
  post: <T>(url: string, options?: RequestInit) =>
    request<T>("POST", url, options),
  put: <T>(url: string, options?: RequestInit) =>
    request<T>("PUT", url, options),
  patch: <T>(url: string, options?: RequestInit) =>
    request<T>("PATCH", url, options),
  delete: <T>(url: string, options?: RequestInit) =>
    request<T>("DELETE", url, options),
};

export default http;
