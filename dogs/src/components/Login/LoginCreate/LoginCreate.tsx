import { FormEventHandler } from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { USER_POST } from '../../../api';
import { useUser } from '../../../context/UserContext';
import useFetch from '../../../hooks/useFetch';
import Error from '../../../helpers/Error';
import Head from '../../../helpers/Head';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = useUser()
  const {loading, error, request} = useFetch()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })

    const {response} = await request(url, options)
    if(response && response.ok) userLogin(username.value, password.value)
    
  };

  return (
    <section>
       <Head title='Criar Conta' description='Página para criar nova conta no site Dogs' />
      <h1 className='title'>Cadastre-se</h1>
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
        {loading ? <Button disabled>Cadastrando..</Button> :  <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
};
