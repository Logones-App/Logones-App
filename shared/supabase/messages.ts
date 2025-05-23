// Ce fichier ne contient que les requêtes spécifiques à la table messages.
import type { TableRow } from "@/shared/supabase/table-types";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";
import { supabase } from "@/shared/supabase/supabaseClient";

export type Message = TableRow<"messages">;

// Exemple de requête spécifique : récupération des messages créés aujourd'hui
export async function getTodayMessages(): Promise<PostgrestSingleResponse<Message[]>> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const iso = today.toISOString();
  return supabase
    .from("messages")
    .select("*")
    .gte("created_at", iso);
}
