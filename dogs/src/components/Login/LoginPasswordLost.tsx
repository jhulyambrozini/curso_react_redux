import React, { FormEventHandler } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

const LoginPassowrdLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: 'http://localhost:5173/login/reset',
      });
      await request(url, options);
    }
  };

  return (
    <section>
       <Head title='Perdeu a senha' description='Página para recuperar senha do site Dogs' />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email / Usuário"
            type="text"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPassowrdLost;
