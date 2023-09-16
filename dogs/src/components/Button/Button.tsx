import { ComponentProps } from "react"
import { ButtonContainer } from "./style"

type ButtonProps = ComponentProps<'button'>

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  )
}

export default Button