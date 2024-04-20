import { z } from "zod";

export const loginRequestSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4).max(100),
  })
  .strict();

export type LoginRequest = z.infer<typeof loginRequestSchema>;
