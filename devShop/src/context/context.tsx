import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (product: CartProps) => void;
  totalCart: string;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode; // Necessário para envolver os componentes da aplicação
}

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [totalCart, setTotalCart] = useState<string>("");

  const addItemCart = (newItem: ProductsProps) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList)
      totalResultCart(cartList);
      return;
    }

    let data = { ...newItem, amount: 1, total: newItem.price };

    setCart(products => [...products, data])
    totalResultCart([...cart, data]);
  };


  const removeItemCart = (product: CartProps) => {
    const indexItem = cart.findIndex((item) => item.id === product.id);
    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount - 1
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
      setCart(cartList)
      totalResultCart(cartList);
      return;
    }
    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  const totalResultCart = (items: CartProps[]) => {
    let myCart = items;
    let result = myCart.reduce((acc, item) => {
      return acc + item.total;
    }, 0);
    const restultFormted = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    setTotalCart(restultFormted);
  }

  return (
    <CartContext.Provider
      value={{
        addItemCart,
        cart,
        cartAmount: cart.length,
        removeItemCart,
        totalCart

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
