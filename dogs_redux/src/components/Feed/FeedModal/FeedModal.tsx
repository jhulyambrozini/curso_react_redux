import { useSelector } from 'react-redux';
import {  MouseEventHandler } from 'react';

import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { Modal } from './style';

import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';


import { RootReducer, useAppDispatch } from '../../../store';
import { closeModal } from '../../../store/reducers/modal';

const FeedModal = () => {
  const {data, loading, error} = useSelector((state: RootReducer) => state.photo)
  const {modal} = useSelector((state: RootReducer) => state.modal)
  const dispatch = useAppDispatch()

  const handleOutsiteClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal())
    }
  };

  if(!modal) return null

  return (
    <Modal onClick={handleOutsiteClick}>
      {error && <Error error='foto não encontrada.' />}
      {loading && <Loading />}
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
