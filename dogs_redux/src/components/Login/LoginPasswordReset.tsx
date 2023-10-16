import { useNavigate } from 'react-router-dom';
import { FormEventHandler, useEffect, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import useForm from '../../hooks/useForm';

import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { usePasswordResetMutation } from '../../services/api';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const [passwordReset, {isLoading}] = usePasswordResetMutation()
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (password.validate()) {
      passwordReset({
        login,
        key,
        password: password.value,
      })
      .unwrap()
      .then(() => {
        navigate('/login')
      })
      .catch((error) => console.error('rejected', error))
    }
  };
  return (
    <section className="animeLeft">
      <Head
        title="Resetar a senha"
        description="Página par resetar senha do usúario no site Dogs"
      />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          id="password"
          type="password"
          {...password}
        />
        {isLoading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error="Erro ao resertar." />
    </section>
  );
};

export default LoginPasswordReset;
