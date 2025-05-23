"use client";

import { useEffect, useState } from "react";
import { selectRows, insertRow, updateRow, deleteRow } from "@/shared/supabase/crud";
import type { TableRow } from "@/shared/supabase/table-types";

// Exemple avec la table messages

type Message = TableRow<"messages">;

export default function CrudDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    selectRows("messages").then(({ data }) => setMessages(data || []));
  }, []);

  const handleAdd = async () => {
    if (!newMessage) return;
    await insertRow("messages", { content: newMessage });
    const { data } = await selectRows("messages");
    setMessages(data || []);
    setNewMessage("");
  };

  const handleUpdate = async (id: number, content: string) => {
    await updateRow("messages", id, { content });
    const { data } = await selectRows("messages");
    setMessages(data || []);
  };

  const handleDelete = async (id: number) => {
    await deleteRow("messages", id);
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CRUD Messages</h1>
      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Nouveau message"
      />
      <button onClick={handleAdd}>Ajouter</button>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <input
              value={msg.content || ""}
              onChange={e => handleUpdate(msg.id, e.target.value)}
            />
            <button onClick={() => handleDelete(msg.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
