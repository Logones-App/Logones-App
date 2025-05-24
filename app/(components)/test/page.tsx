"use client";

import { useEffect, useState } from "react";
import { insertRow, updateRow, deleteRow } from "@/shared/supabase/crud";
import { useObservable, useSelector } from "@legendapp/state/react";
import { dbState, subscribeTableRealtime } from "@/shared/legendState/store";
import { useAuth, useAuthSync } from "@/shared/legendState/authStore";
import { useRouter } from "next/navigation";

export default function CrudDemo() {
  useAuthSync(); // Synchronise l'état utilisateur au chargement
  const user = useAuth();
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");

  /*  useEffect(() => {
    if (user === null) {
      router.replace("/sign-in");
    }
  }, [user, router]); */

  /* if (user === null) {
    return null; // Ou un loader/spinner
  } */

  /*  if (!user) {
    return <a href="/sign-in">Se connecter</a>;
  } */

  useEffect(() => {
    subscribeTableRealtime("messages");
  }, []);

  // Utilisation du state Legend-State
  const messages = useSelector(() => dbState["messages"].get() ?? []);

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
    // Plus besoin de setMessages ici, l'abonnement realtime s'en charge
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
