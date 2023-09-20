import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import PhotoContent from '../../components/Photo/PhotoContent/PhotoContent';

import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import Head from '../../helpers/Head';

import { PHOTO_GET } from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import { fetchPhoto } from '../../store/reducers/photo';
import { AnyAction, Dispatch } from 'redux';


const Photo = () => {
  const { id } = useParams();

  const {loading, error, data} = useSelector((state: RootReducer) => state.photo)
  const dispatch = useDispatch()
  const idNum = Number(id)

  useEffect(() => {
    if (id) {
      const fetchAction: (dispatch: Dispatch<AnyAction>) => Promise<void> = fetchPhoto(idNum);
     dispatch(fetchPhoto(idNum))
    }
  }, [dispatch, id]);

  if (error) return <Error error={error} />;
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
