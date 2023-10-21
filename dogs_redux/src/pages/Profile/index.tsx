import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';
import Head from '../../helpers/Head';

const UserProfile = () => {
  const { user } = useParams();

  if (user)
    return (
      <section className="mainContainer container">
        <Head
          title={user}
          description="Perfil do usuário no site Dogs"
        />
        <h1 className="title">{user}</h1>
        <Feed user={user}/>
      </section>
    );
  else return null;
};

export default UserProfile;
