import Head from 'next/head'
import Image from 'next/image'

import imgHome from '../../public/images/avatar.svg'
import SubscribeButton from '../components/SubscribeButton'

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | ig.news</title>
      </Head>
        
      <main>
        <section>
          <span>👏 &nbsp;&nbsp;Hey, welcome</span>

          <h1>News about <br /> the <span>React</span> world</h1>
          
          <p>Get acess to all the publications <br /> <span>for $9.90 month</span></p>
          
          <SubscribeButton />
        </section>

        <Image src={imgHome} alt="Girl Coding" />
      </main>
    </Container>
  )
}