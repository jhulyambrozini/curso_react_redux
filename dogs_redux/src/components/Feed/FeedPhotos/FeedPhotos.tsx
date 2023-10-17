
import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem';
import { FeedList } from './style';

import { RootReducer } from '../../../store';
import { useSelector } from 'react-redux';

const FeedPhotos = () => {
  const {list} = useSelector((state: RootReducer) => state.feed)

  if (!list) return null;
    return (
      <FeedList className="animeLeft">
        {list?.map((photo: PhotosType) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
          />
        ))}
      </FeedList>
      
    );
};

export default FeedPhotos;