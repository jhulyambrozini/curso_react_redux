import { Dispatch, MouseEventHandler, SetStateAction, useEffect } from 'react';

import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { Modal } from './style';

import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../../store';
import { fetchPhoto } from '../../../store/reducers/photo';

type FeedModalProps = {
  photo: Data;
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
};


const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {

  const {loading, error, data} = useSelector((state: RootReducer) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchPhoto(photo.id))
  }, [dispatch,photo]);


  const handleOutsiteClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <Modal onClick={handleOutsiteClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && (
        <PhotoContent
          single={false}
        />
      )}
    </Modal>
  );
};

export default FeedModal;
