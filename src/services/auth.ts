import config from "@/configs/config";
import http from "@/services/http";
import { LoginResponse } from "@/types/auth";
import { ApiResponse } from "@/types/core/response";
import { LoginRequest } from "@/validations/auth.schema";

const login = (data: LoginRequest) => {
  return http.post<ApiResponse<LoginResponse>>("/login", {
    body: JSON.stringify({ email: data.email, password: data.password }),
  });
};

const authServices = {
  login,
};

export default authServices;
