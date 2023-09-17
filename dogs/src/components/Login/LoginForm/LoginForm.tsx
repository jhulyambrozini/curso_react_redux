import { FormEventHandler } from "react"
import Input from "../../Input/Input"
import Button from "../../Button/Button"
import useForm from "../../../hooks/useForm"
import { useUser } from "../../../context/UserContext"
import Error from "../../../helpers/Error"
import { CreateAccount, LinkLost, LoginFormStyle } from "./style"

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginFormStyle onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" id="name" {...usernameValue}/>
        <Input type="password" label="Senha" id="password" {...passwordValue}/>
        
        {loading ?  <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
       
        <Error error={error} />
      </LoginFormStyle>
      <LinkLost to='/login/lost'>Perdeu a senha?</LinkLost>
      <CreateAccount>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      <Button to='/login/create'>Cadastro</Button>
      </CreateAccount>
    </section>
  )
}
