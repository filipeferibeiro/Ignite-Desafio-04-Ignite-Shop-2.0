import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app';

import logoImg from '@/assets/logo.svg'
import Link from 'next/link';
import { CartDialog } from '@/components/CartDialog';
import { CartProvider } from '@/contexts/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header>
          <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>
          <CartDialog />
        </Header>
        
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
