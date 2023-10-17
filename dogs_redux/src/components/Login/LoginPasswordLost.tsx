import { FormEventHandler } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import useForm from '../../hooks/useForm';

import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { usePasswordLostMutation } from '../../services/api';

const LoginPassowrdLost = () => {
  const login = useForm();
  const [passwordLost, {data, isLoading, isError}] = usePasswordLostMutation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (login.validate()) {
      passwordLost({
        login: login.value,
        url: 'http://localhost:5173/login/reset',
      })
    }
  };

  return (
    <section className="animeLeft">
      <Head
        title="Perdeu a senha"
        description="Página para recuperar senha do site Dogs"
      />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email / Usuário"
            type="text"
            {...login}
          />
          {isLoading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      {isError && <Error error="Usuário não encontrado." />}
    </section>
  );
};

export default LoginPassowrdLost;
