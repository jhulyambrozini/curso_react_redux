import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { PhotoItem, Views } from './style';
import Image from '../../../helpers/Image/Image';

type FeedPhotoItemProps = {
  photo: Data;
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
};

const FeedPhotoItem = ({ photo, setModalPhoto }: FeedPhotoItemProps) => {
  const handleClick: MouseEventHandler<HTMLLIElement> = () => {
    setModalPhoto(photo);
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
