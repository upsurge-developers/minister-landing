import { createServerClient } from "@supabase/auth-helpers-remix";
import { env } from '~/lib/env'
import { Database } from "~/types/database.types"

export const createSupabaseServerClient = ({
    request,
    response,
}: {
    request: Request;
    response: Response;
}) =>
    createServerClient<Database>(
        env.SUPABASE_URL,
        env.SUPABASE_PUBLIC_KEY,
        { request, response }
    )
