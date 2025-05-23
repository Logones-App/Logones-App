import { observable } from '@legendapp/state';
import { subscribeToTables } from '../supabase/realtime';
import { selectRows } from '../supabase/crud';
import type { TableName, RowWithId } from '../supabase/table-types';

// Store global Legend-State pour toutes les tables observées (clé = nom de la table)
export const dbState = observable<Record<string, any[]>>({});

function hasId(row: any): row is { id: string } {
  return typeof row?.id === 'string';
}

// Fonction d'abonnement générique pour n'importe quelle table
export function subscribeTableRealtime<T extends TableName>(table: T) {
  // Initialise le tableau si besoin
  if (!dbState[table].peek()) dbState[table].set([]);
  // Chargement initial des données de la table
  selectRows(table).then(({ data }) => {
    if (data) dbState[table].set(data);
  });
  subscribeToTables({
    tables: [table],
    onInsert: (payload) => {
      dbState[table].set((prev: any[]) => [...prev, payload.new]);
    },
    onUpdate: (payload) => {
      dbState[table].set((prev: any[]) =>
        prev.map((row) =>
          hasId(row) && hasId(payload.new) && row.id === payload.new.id
            ? payload.new
            : row
        )
      );
    },
    onDelete: (payload) => {
      dbState[table].set((prev: any[]) =>
        prev.filter((row) =>
          hasId(row) && hasId(payload.old)
            ? row.id !== payload.old.id
            : true
        )
      );
    },
  });
}
