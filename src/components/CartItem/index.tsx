import { Product, useCart } from "@/contexts/CartContext";
import { CartItemContainer, CartItemDescriptionContainer, CartItemImageContainer } from "./styles";
import Image from "next/image";

interface CartItemProps {
  product: Product
}

export function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useCart()

  function handleRemoveProductFromCart() {
    removeFromCart(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <Image src={product.imageUrl} width={94} height={94} alt="" />
      </CartItemImageContainer>
      <CartItemDescriptionContainer>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
        <button onClick={handleRemoveProductFromCart}>Remover</button>
      </CartItemDescriptionContainer>
    </CartItemContainer>
  )
}