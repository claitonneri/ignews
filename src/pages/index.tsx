import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import imgHome from '../../public/images/avatar.svg'

import SubscribeButton from '../components/SubscribeButton'

import { stripe } from '../services/stripe'

import { Container } from './styles'

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: IHomeProps) {
  return (
    <Container>
      <Head>
        <title>Home | ig.news</title>
      </Head>
        
      <main>
        <section>
          <span>👏 &nbsp;&nbsp;Hey, welcome</span>

          <h1>News about <br /> the <span>React</span> world</h1>
          
          <p>Get acess to all the publications <br /> <span>for {product.amount} month</span></p>
          
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={imgHome} alt="Girl Coding" />
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KCPK9BbElVq1QaRI3ue9bWM')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}