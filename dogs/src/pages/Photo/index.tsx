import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';
import Head from '../../helpers/Head';

type PhotoFetch = {  
    data: DataFeedPhoto | null;
    loading: boolean;
    error: null;
    request: (url: RequestInfo | URL, options: RequestInit | undefined) => Promise<{
        response: Response | undefined;
        json: any;
    }>;
}
const Photo = () => {
  const { id } = useParams();
  const {data, loading, error, request }: PhotoFetch = useFetch();
  
  useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(Number(id));
      request(url, options);
    }
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null

  const dataValid = data as DataFeedPhoto
  return (
    <section className='mainContainer container'>
      <Head title={dataValid.photo.title} description={`Página da foto ${dataValid.photo.author}`} />
      <PhotoContent single={true} data={dataValid} />
    </section>
  );
};

export default Photo;
