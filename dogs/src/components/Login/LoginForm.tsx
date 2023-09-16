import { FormEventHandler } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import useForm from "../../hooks/useForm"

export const LoginForm = () => {
  const username = useForm('email')
  const password = useForm()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if(username.validate() && password.validate()){
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" id="name" {...username}/>
        <Input type="password" label="Senha" id="password" {...password}/>
        
        <Button>Enviar</Button>
      </form>
    </section>
  )
}
