import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface ISubscribeButtonProps extends IButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId, ...props }: ISubscribeButtonProps) {
  return (
    <Container type="button" {...props}>
      Subscribe now
    </Container>
  )
}