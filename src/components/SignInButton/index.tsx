import { ButtonHTMLAttributes } from 'react'
import { Container, Icon, OutIcon } from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function SignInButton({ ...props }: IButtonProps) {
  const isLogged = true;

  return (
    <Container type='button' {...props}>
      <Icon size={24} isLogged={isLogged} />
      Sign in with GitHub
    
      {isLogged && <OutIcon size={16} />}
    </Container>
  )
}