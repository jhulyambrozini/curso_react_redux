import { ComponentProps} from "react"
import { ButtonContainer } from "./style"
import { Link } from "react-router-dom"

type ButtonProps = ComponentProps<'button'> & {
  to?: string
}

const Button = ({children, to, ...props}: ButtonProps) => {
  if (to) {
    return (
      <Link to={to}>
        <ButtonContainer {...props}>{children}</ButtonContainer>
      </Link>
    );
  }
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button