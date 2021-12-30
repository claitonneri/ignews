import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function SubscribeButton({...props}: IButtonProps) {
  return (
    <Container type="button" {...props}>
      Subscribe now
    </Container>
  )
}