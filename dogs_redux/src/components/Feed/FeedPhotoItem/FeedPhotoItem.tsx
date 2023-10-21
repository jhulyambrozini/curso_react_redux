import { PhotoItem, Views } from './style';
import Image from '../../../helpers/Image/Image';

import { useAppDispatch } from '../../../store';
import { openModal } from '../../../store/reducers/modal';
import { getPhotoAsync } from '../../../store/reducers/photo';

const FeedPhotoItem = ({ photo }: {photo: PhotosType}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(openModal())
    console.log(photo.id)
    const aa = dispatch(getPhotoAsync({id: photo.id}))
    console.log(aa)
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
