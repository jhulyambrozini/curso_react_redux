import { FormEventHandler } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import useForm from '../../hooks/useForm';

import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { useUser } from '../../context/UserContext';
import { useUserPostMutation } from '../../services/api';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const [userPost, {isLoading, error}] = useUserPostMutation()

  const { userLogin } = useUser();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    userPost({
      username: username.value,
      password: password.value,
      email: email.value
    })
    .unwrap()
    .then(() => userLogin(username.value, password.value))
    .catch((error) =>  console.error(error))
  };

  return (
    <section>
      <Head
        title="Criar Conta"
        description="Página para criar nova conta no site Dogs"
      />
      <h1 className="title">Cadastre-se</h1>
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
        {isLoading ? (
          <Button disabled>Cadastrando..</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error="Erro desconhecido"/>}
      </form>
    </section>
  );
};
