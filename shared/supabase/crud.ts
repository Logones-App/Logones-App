import { supabase } from "./supabaseClient";
import type { TableName, TableRow } from "./table-types";

export async function selectRows<T extends TableName>(table: T) {
  return await supabase.from(table).select("*");
}

export async function insertRow<T extends TableName>(table: T, row: Partial<TableRow<T>>) {
  return await supabase.from(table).insert([row]);
}

export async function updateRow<T extends TableName>(table: T, id: number, row: Partial<TableRow<T>>) {
  return await supabase.from(table).update(row).eq("id", id);
}

export async function deleteRow<T extends TableName>(table: T, id: number) {
  return await supabase.from(table).delete().eq("id", id);
}
