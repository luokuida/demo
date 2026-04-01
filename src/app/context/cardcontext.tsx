"use client";
import { createContext, useContext, useState } from "react";

interface CardContextType {
  count: number;
  total: number;
  addItem: (product: any) => void;
  clearCart : () => void;
  items: { id: string; quantity: number; name: string }[];
}

const CardContext = createContext<CardContextType>({
  count: 0,
  total: 0,
  addItem: (product: any): void => {},
  clearCart: (): void => {},
  items: [],
});

export default function CardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState<{ id: string; quantity: number; name: string }[]>([]);

  const addItem = (product: any): void => {
    setCount(count + 1);
    setTotal(total + product.price);
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {  
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCount(0);
    setTotal(0);
    setItems([]);
  };

  return (
    <CardContext value={{ count, total, items, addItem, clearCart }}>{children}</CardContext>
  );
}

export function useCard() {
  return useContext(CardContext);
}
