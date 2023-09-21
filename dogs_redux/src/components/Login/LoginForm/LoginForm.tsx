import { FormEventHandler } from 'react';

import Input from '../../Input/Input';
import Button from '../../Button/Button';

import { CreateAccount, LinkLost, LoginFormStyle } from './style';

import useForm from '../../../hooks/useForm';

import Error from '../../../helpers/Error';
import Head from '../../../helpers/Head';

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { userLogin } from '../../../store/reducers/user';

export const LoginForm = () => {
  const usernameValue = useForm();
  const passwordValue = useForm();
  const dispatch = useDispatch()

  const {token, user} = useSelector((state: RootReducer) => state)
  const loading = token.loading || user.loading
  const error = token.error || user.error


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (usernameValue.validate() && passwordValue.validate()) {
      const username = usernameValue.value;
      const password = passwordValue.value;
      
      dispatch(userLogin({username, password}))
    }
  };

  return (
    <section className="animeLeft">
      <Head
        title="Login"
        description="Página de login"
      />
      <h1 className="title">Login</h1>
      <LoginFormStyle onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Usuário"
          id="name"
          {...usernameValue}
        />
        <Input
          type="password"
          label="Senha"
          id="password"
          {...passwordValue}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error && 'Dados incorretos.'} />
      </LoginFormStyle>
      <LinkLost to="/login/lost">Perdeu a senha?</LinkLost>
      <CreateAccount>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button to="/login/create">Cadastro</Button>
      </CreateAccount>
    </section>
  );
};
