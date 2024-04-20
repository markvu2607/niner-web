import { User } from "@/types/base";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
