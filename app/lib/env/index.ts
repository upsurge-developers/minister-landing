import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    SUPABASE_URL: z.string().url(),
    SUPABASE_PUBLIC_KEY: z.string(),
  },
  // clientPrefix: "PUBLIC_",
 
  // client: {
  //   PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  // },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})