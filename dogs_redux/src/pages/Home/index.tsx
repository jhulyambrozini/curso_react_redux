import { useSelector } from 'react-redux';
import Feed from '../../components/Feed/Feed';
import Head from '../../helpers/Head';
import { RootReducer } from '../../store';

const Home = () => {
  const {data} = useSelector((state: RootReducer) => state.user)
  if(!data) return null
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos"
      />
      <Feed user={0} />
    </section>
  );
};

export default Home;
