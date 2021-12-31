import { ButtonHTMLAttributes } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { Container, Icon, OutIcon } from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function SignInButton({ ...props }: IButtonProps) {
  const { data: session, status } = useSession()

  return (
    <Container
      type='button'
      onClick={() => {
        if (status === 'unauthenticated')
          signIn('google')
        
        return signOut()
      }}
      {...props}
    >
      <Icon size={24} $islogged={!!session} />
      {!!session ? session.user?.name : 'Sign in with Google'}
    
      {!!session && <OutIcon size={16} />}
    </Container>
  )
}