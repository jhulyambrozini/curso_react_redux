import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(Number(id));
      request(url, options);
    }
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className='mainContainer container'>
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
