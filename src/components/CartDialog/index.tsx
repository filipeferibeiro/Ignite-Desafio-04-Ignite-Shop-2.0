import { BigButton, CartButton } from '@/styles/pages/app';
import { Handbag, X } from '@phosphor-icons/react/dist/ssr';
import * as Dialog from '@radix-ui/react-dialog';
import { CartDialogClose, CartDialogContent, CartDialogContentContainer, CartDialogDescription, CartDialogOverlay, CartDialogTitle, CartDialogTrigger, CartItemsList, CartResume } from './styles';
import { Product, useCart } from '@/contexts/CartContext';
import { CartItem } from '../CartItem';
import { formatPrice } from '@/utils/priceUtil';

export function CartDialog() {
  const { cartItems, addToCart, removeFromCart } = useCart()

  // function handleAddCartItem() {
  //   const randomNumber = Math.floor(Math.random() * 99999) + 1;
  //   const item: CartItem = {
  //     id: randomNumber,
  //     name: `Item - ${randomNumber}`,
  //     price: randomNumber,
  //     imageUrl: 'img'
  //   }
  //   addToCart(item)
  // }

  const cartItemsQuantity = cartItems.length

  const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0)
  const totalAmountFormatted = formatPrice(totalAmount / 100)

  return (
    <Dialog.Root>
    <CartDialogTrigger hasItems={cartItemsQuantity > 0}>
      <span>{cartItemsQuantity}</span>
      <Handbag size={24} weight="bold" />
    </CartDialogTrigger>
    <Dialog.Portal>
      <CartDialogOverlay />
      <CartDialogContent>
        <CartDialogClose>
          <X size={24} weight="bold" />
        </CartDialogClose>
        <CartDialogTitle>Sacola de compras</CartDialogTitle>
        <CartDialogContentContainer>
          <CartItemsList>
            {cartItems.map(item => (
              <CartItem key={item.id} product={item} />
            ))}
          </CartItemsList>
          <CartResume>
            <section>
              <span>Quantidade</span>
              <span>{cartItemsQuantity} itens</span>
            </section>
            <section>
              <strong>Valor total</strong>
              <strong>{totalAmountFormatted}</strong>
            </section>
            <BigButton>Finalizar compra</BigButton>
          </CartResume>
        </CartDialogContentContainer>
      </CartDialogContent>
    </Dialog.Portal>
  </Dialog.Root>
  );
}
