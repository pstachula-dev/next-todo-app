import { z } from "zod";

const envVariablesSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

const envVariables = envVariablesSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends z.infer<typeof envVariablesSchema> {}
  }
}

export { envVariables };
