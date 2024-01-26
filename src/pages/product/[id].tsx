import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { stripe } from "@/lib/stipe"
import Stripe from "stripe"

import { formatPrice } from "@/utils/priceUtil"
import axios from "axios"
import { useState } from "react"
import Head from "next/head"
import { BigButton } from "@/styles/pages/app"
import { Product, useCart } from "@/contexts/CartContext"

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert("Falha ao redirecionar ao checkout!")
    }
  }

  function handleAddProductToCart() {
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <BigButton disabled={isCreatingCheckoutSession} onClick={handleAddProductToCart}>Colocar na sacola</BigButton>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os proditos mais vendidos / mais acessados

  return {
    paths: [
      { params: { id: 'prod_P0DEUsJyZSA0pw' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatPrice(price.unit_amount as number / 100),
        amount: price.unit_amount as number,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}