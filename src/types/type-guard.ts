import { ApiResponse, ErrorResponse } from "./core/response";

export function isErrorResponse<T>(
  response: ApiResponse<T>
): response is ErrorResponse {
  return "error" in response;
}
