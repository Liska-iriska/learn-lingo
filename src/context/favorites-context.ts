import { createContext } from "react";

export interface FavoritesContextValue {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextValue>({
  favoriteIds: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
});
