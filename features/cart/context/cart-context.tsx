"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { ShoppingCart, CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { config } from "@/constants/url";

const CartContext = createContext<ShoppingCart | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${config.BASE_URL}${config.endpoints.cart}`);
        if (!res.ok) {
          throw new Error("Failed to retrieve data!");
        }
        const data = await res.json();
        setLoading(false);
        setItems(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  const addItem = async (product: Product, quantity: number) => {
    try {
      const res = await fetch(`${config.BASE_URL}${config.endpoints.cart}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id: Number(product.id), product: product, quantity })
      })
      const item = await res.json();
      setItems((prevItems) => [...prevItems, item])
    } catch (error) {
      setError(error);
    }
  }

  const removeItem = async (productId: number) => {
    try {
      const res = await fetch(`${config.BASE_URL}${config.endpoints.cart}`, {
        method: "DELETE"
      })
      const item = await res.json();
      setItems((prevItem) => prevItem.filter((item) => item.productID.id != productId))
    } catch (error) {
      setError(error);
    }
  }

  const updateItemQuantity = async (productId: number, quantity: number) => {
    try {
      const res = await fetch(`${config.BASE_URL}${config.endpoints.cart}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity })
      })
      const updatedItem = await res.json();
      setItems((prevItem) => prevItem.map((item) => item.id == productId ? { ...item, quantity: updatedItem.quantity } : item))
    } catch (error) {
      setError(error);
    }
  }

  const getTotalPrice = () => {
    return 12;
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateItemQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );

};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCarts muse within CartProvider");
  return context;
}