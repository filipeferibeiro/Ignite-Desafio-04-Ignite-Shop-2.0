import { GetStaticProps } from "next"
import Image from "next/image"
import { stripe } from "@/lib/stipe"

import { useKeenSlider } from 'keen-slider/react'

import { FooterDetails, HomeContainer, Product } from "@/styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { formatPrice } from "@/utils/priceUtil"
import Link from "next/link"
import Head from "next/head"
import { CartButton } from "@/styles/pages/app"
import { Handbag } from "@phosphor-icons/react"
import { Product as ProductType, useCart } from "@/contexts/CartContext"

interface HomeProps {
  products: ProductType[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  function handleAddProductToCart(product: ProductType) {
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <FooterDetails>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </FooterDetails>
                <CartButton onCard onClick={() => handleAddProductToCart(product)}>
                  <Handbag size={24} weight="bold" />
                </CartButton>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => { // GetServerSideProps
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatPrice(price.unit_amount as number / 100),
      amount: price.unit_amount as number,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}