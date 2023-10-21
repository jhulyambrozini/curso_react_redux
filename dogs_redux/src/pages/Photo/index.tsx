import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';

import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { usePhotoGetQuery } from '../../services/api';
import { useAppDispatch } from '../../store';
import { closeModal } from '../../store/reducers/modal';

const Photo = () => {
  const { id } = useParams();
  const [shouldSkip, setShouldSkip] = useState(false)
  const {data, isError, isLoading} = usePhotoGetQuery(id!)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(data && !shouldSkip){
      setShouldSkip(true)
    }
    dispatch(closeModal())
  }, [data, shouldSkip, dispatch]);

  if (isError) return <Error error='Foto não encontrada.' />;
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
