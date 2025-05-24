import { useEffect, useState } from 'react';
import { getUser, onAuthStateChange, signOut } from '@/shared/supabase/auth';
import { observable } from '@legendapp/state';

// Store Legend-State pour l'utilisateur connecté
export const authState = observable<{ user: any | null }>({ user: null });

export function useAuthSync() {
  useEffect(() => {
    // Récupère l'utilisateur au chargement
    getUser().then(user => authState.user.set(user));
    // Écoute les changements d'auth
    const { data: listener } = onAuthStateChange(user => authState.user.set(user));
    return () => { listener?.subscription.unsubscribe(); };
  }, []);
}

export function useAuth() {
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    const sub = authState.user.onChange(setUser);
    setUser(authState.user.get());
    return () => sub();
  }, []);
  return user;
}