import { createContext, ReactNode, useContext, useState } from 'react';

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  amount: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(item: Product) {
    if (!isInCart(item.id)) {
      setCartItems((currentItems) => [...currentItems, item]);
    } else {
      alert('Este item já existe na sua Sacola de Compras!')
    }
  }

  function removeFromCart(itemId: string) {
    setCartItems((currentItems) => currentItems.filter(item => item.id !== itemId));
  }

  function isInCart(itemId: string) {
    return cartItems.some(item => item.id === itemId);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
