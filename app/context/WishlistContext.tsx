"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/data/products";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clearWishlist: () => void;
  isSaved: (id: number) => boolean;
  itemCount: number;
};

const STORAGE_KEY = "boleli-wishlist";

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as WishlistItem[];
      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems((current) => {
      if (current.some((item) => item.id === product.id)) return current;

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
        },
      ];
    });
  };

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const clearWishlist = () => setItems([]);

  const isSaved = (id: number) => items.some((item) => item.id === id);

  const itemCount = useMemo(
    () => items.length,
    [items]
  );

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearWishlist,
        isSaved,
        itemCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}