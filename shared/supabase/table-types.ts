import type { Database } from "./database.types";

export type TableName = keyof Database["public"]["Tables"];
export type TableRow<T extends TableName> = Database["public"]["Tables"][T]["Row"];

// Type utilitaire : garantit la présence d'un champ 'id' (uuid) sur chaque ligne d'une table
export type RowWithId<T extends TableName> = TableRow<T> & { id: string };
