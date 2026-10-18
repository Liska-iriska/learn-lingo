import { useState, type ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { FavoritesContext } from "./favorites-context";

const storageKey = (uid: string) => `favorites:${uid}`;

const readFavorites = (uid: string | null): string[] => {
  if (!uid) return [];
  try {
    const raw = localStorage.getItem(storageKey(uid));
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

function FavoritesState({
  uid,
  children,
}: {
  uid: string | null;
  children: ReactNode;
}) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() =>
    readFavorites(uid),
  );

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const toggleFavorite = (id: string) => {
    if (!uid) return;
    const next = favoriteIds.includes(id)
      ? favoriteIds.filter((item) => item !== id)
      : [...favoriteIds, id];
    setFavoriteIds(next);
    localStorage.setItem(storageKey(uid), JSON.stringify(next));
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuth();
  const uid = user?.uid ?? null;

  return (
    <FavoritesState key={uid ?? "guest"} uid={uid}>
      {children}
    </FavoritesState>
  );
}
