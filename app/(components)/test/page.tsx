"use client";

import { useEffect, useState } from "react";
import {
  selectRows,
  insertRow,
  updateRow,
  deleteRow,
} from "@/shared/supabase/crud";
import { subscribeToTables } from "@/shared/supabase/realtime";
import type { TableRow } from "@/shared/supabase/table-types";

// Exemple avec la table messages

type Message = TableRow<"messages">;

export default function CrudDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    let ignore = false;
    selectRows("messages").then(({ data }) => {
      if (!ignore) setMessages(data || []);
    });
    // Abonnement en temps réel
    const channel = subscribeToTables<Message>({
      tables: ["messages"],
      onInsert: (payload) => {
        setMessages((prev) => [...prev, payload.new]);
      },
      onUpdate: (payload) => {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === payload.new.id ? payload.new : msg))
        );
      },
      onDelete: (payload) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== payload.old.id));
      },
    });
    return () => {
      ignore = true;
      channel.unsubscribe && channel.unsubscribe();
    };
  }, []);

  const handleAdd = async () => {
    if (!newMessage) return;
    await insertRow("messages", { content: newMessage });
    setNewMessage("");
  };

  const handleUpdate = async (id: number, content: string) => {
    await updateRow("messages", id, { content });
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
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Nouveau message"
      />
      <button onClick={handleAdd}>Ajouter</button>
      <h2>Liste simple des messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.content}</li>
        ))}
      </ul>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <input
              value={msg.content || ""}
              onChange={(e) => handleUpdate(msg.id, e.target.value)}
            />
            <button onClick={() => handleDelete(msg.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
