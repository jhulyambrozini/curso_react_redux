import { ComponentProps } from "react"
import { InputGroup, InputStyle, Label } from "./style"

type InputProps = ComponentProps<'input'> & {
    label: string
    error: string | null
    id: string
}

const Input = ({label, id, error, onBlur, onChange, value, type}: InputProps) => {
  return (
    <InputGroup>
        <Label htmlFor={id}>{label}</Label>
        <InputStyle
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        />
        {error && <p className="error">{error}</p>}
    </InputGroup>
  )
}

export default Input