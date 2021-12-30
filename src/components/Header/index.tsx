import Image from 'next/image'

import logoImg from '../../../public/images/logo.svg'

import { Container, Content, Link } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <Image src={logoImg} alt='Ig.News Logo' />

        <nav>
          <Link active={false}>Home</Link>
          <Link active={true}>Posts</Link>
        </nav>
      </Content>
    </Container>
  )
}