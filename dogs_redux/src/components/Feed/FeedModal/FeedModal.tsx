import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { Modal } from './style';

import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';
import { usePhotoGetQuery } from '../../../services/api';

type FeedModalProps = {
  photo: Data;
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
};

const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
 
  const {data, isLoading, isError} = usePhotoGetQuery(photo.id)

  const handleOutsiteClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <Modal onClick={handleOutsiteClick}>
      {isError && <Error error='foto não encontrada.' />}
      {isLoading && <Loading />}
      {data && (
        <PhotoContent
          single={false}
          data={data}
        />
      )}
    </Modal>
  );
};

export default FeedModal;
