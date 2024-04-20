"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import authServices from "@/services/auth";
import { isErrorResponse } from "@/types/type-guard";
import { LoginRequest } from "@/validations/auth.schema";

export const login = async (formValues: LoginRequest) => {
  const data = await authServices.login(formValues);

  if (isErrorResponse(data)) {
    const { error, message, status } = data;
    throw new Error(`${message}(${status}): ${error.description}`);
  }

  const cookieStore = cookies();
  cookieStore.set({
    name: "accessToken",
    value: data.metadata.accessToken,
    httpOnly: true,
  });
  cookieStore.set({
    name: "refreshToken",
    value: data.metadata.refreshToken,
    httpOnly: true,
  });
  cookieStore.set({
    name: "user",
    value: JSON.stringify(data.metadata.user),
    httpOnly: true,
  });

  redirect("/");
};

export const logout = async () => {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("user");

  redirect("/login");
};
