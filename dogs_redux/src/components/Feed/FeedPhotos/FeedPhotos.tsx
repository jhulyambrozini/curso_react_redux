import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem';
import { FeedList } from './style';

import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';
import {  usePhotosGetQuery } from '../../../services/api';

type FeedPhotosProps = {
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
  setInfinite: Dispatch<SetStateAction<boolean>>;
  user: number | string;
  page: number;
};

const FeedPhotos = ({
  setModalPhoto,
  user,
  page,
  setInfinite,
}: FeedPhotosProps) => {
  const [shouldSkip, setShouldSkip] = useState(false)
  let total = 3
  const { data, isError, isLoading, status } = usePhotosGetQuery({page, total, user})
  
  useEffect(() => {
    if(data && !shouldSkip){
      setShouldSkip(true)
    }
    if(status === 'fulfilled' && data.length < total) setInfinite(false)
    
  }, [data, shouldSkip, setInfinite, status, total]);

  if (isError) return <Error error='Foto não encontrada.' />;
  if (isLoading) return <Loading />;
  if (!data) return null;
    return (
      <FeedList className="animeLeft">
        {data?.map((photo: any) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedList>
    );
};

export default FeedPhotos;
