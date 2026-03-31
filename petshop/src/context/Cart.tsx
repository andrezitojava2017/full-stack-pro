import React, { createContext, useState, useContext, type ReactNode } from 'react';

// 1. Tipagem do Produto e do Contexto
interface Product {
  id: number;
  title:string;
  description: string;
  cover: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  totalValue: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

// 2. O Provider que envolverá a aplicação
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const totalValue = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalValue }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook customizado para facilitar o uso
export const useCart = () => useContext(CartContext);
