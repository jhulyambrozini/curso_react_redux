import { FormEventHandler } from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { USER_POST } from '../../../api';
import { useUser } from '../../../context/UserContext';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = useUser()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })

    const response = await fetch(url, options)
    if(response.ok) userLogin(username.value, password.value)
    console.log(response)
  };

  return (
    <section>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          label="Usuário"
          type="text"
          {...username}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          {...email}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          {...password}
        />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};
