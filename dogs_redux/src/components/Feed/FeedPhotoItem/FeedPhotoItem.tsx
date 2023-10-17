import { MouseEventHandler } from 'react';
import { PhotoItem, Views } from './style';
import Image from '../../../helpers/Image/Image';
import { useAppDispatch } from '../../../store';
import { openModal } from '../../../store/reducers/modal';
import { usePhotoGetQuery } from '../../../services/api';

const FeedPhotoItem = ({ photo }: {photo: PhotosType}) => {
  const dispatch = useAppDispatch()

  const handleClick: MouseEventHandler<HTMLLIElement> = () => {
    dispatch(openModal())
    usePhotoGetQuery(photo.id)
  };

  return (
    <PhotoItem onClick={handleClick}>
      <Image
        src={photo.src}
        alt={photo.title}
      />
      <Views>{photo.acessos}</Views>
    </PhotoItem>
  );
};

export default FeedPhotoItem;
