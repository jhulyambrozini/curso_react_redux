import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';

import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { usePhotoGetQuery } from '../../services/api';

const Photo = () => {
  const { id } = useParams();
  const [shouldSkip, setShouldSkip] = useState(false)

  const {data, error, isError, isLoading} = usePhotoGetQuery(id!)

  useEffect(() => {
    if(data && !shouldSkip){
      setShouldSkip(true)
    }
  }, [data, shouldSkip]);

  if (isError) return <Error error={String(error)} />;
  if (isLoading) return <Loading />;
  if (!data) return null;

  const dataValid = data as DataFeedPhoto;
  return (
    <section className="mainContainer container">
      <Head
        title={dataValid.photo.title}
        description={`Página da foto ${dataValid.photo.author}`}
      />
      <PhotoContent
        single={true}
        data={dataValid}
      />
    </section>
  );
};

export default Photo;
