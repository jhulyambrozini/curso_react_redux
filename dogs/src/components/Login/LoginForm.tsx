import { FormEventHandler } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import useForm from "../../hooks/useForm"
import { useUser } from "../../context/UserContext"

export const LoginForm = () => {
  const usernameValue = useForm()
  const passwordValue = useForm()

  const {userLogin, error, loading} = useUser()


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if(usernameValue.validate() && passwordValue.validate()){

      const username = usernameValue.value
      const password = passwordValue.value

      userLogin(username, password)

    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" id="name" {...usernameValue}/>
        <Input type="password" label="Senha" id="password" {...passwordValue}/>
        
        {loading ?  <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
       
        {error && <p>{error}</p>}
      </form>
    </section>
  )
}
