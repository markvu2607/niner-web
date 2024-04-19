import { z } from "zod";

const envVarsSchema = z.object({
  API_URL: z.string(),
  PORT: z.number().default(8000),
});

const validatedEnvVars = envVarsSchema.safeParse({
  API_URL: process.env.API_URL,
  PORT: Number(process.env.PORT),
});

if (validatedEnvVars.success === false) {
  throw new Error(
    `Config validation error: ${validatedEnvVars.error.flatten().fieldErrors}`
  );
}

const config = {
  apiUrl: validatedEnvVars.data.API_URL,
  port: validatedEnvVars.data.PORT,
};

export default config;
