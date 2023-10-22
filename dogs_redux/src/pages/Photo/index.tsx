import { useEffect, useState } from 'react';

import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';

import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { RootReducer, useAppDispatch } from '../../store';
import { closeModal } from '../../store/reducers/modal';
import { useSelector } from 'react-redux';

const Photo = () => {
  const [shouldSkip, setShouldSkip] = useState(false)
  const {data, loading, error} = useSelector((state: RootReducer) => state.photo)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(data && !shouldSkip){
      setShouldSkip(true)
    }
    dispatch(closeModal())
  }, [data, shouldSkip, dispatch]);

  if (error) return <Error error='Foto não encontrada.' />;
  if (loading) return <Loading />;
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
