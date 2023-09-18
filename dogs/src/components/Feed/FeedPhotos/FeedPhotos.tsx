import { Dispatch, SetStateAction, useEffect } from 'react';
import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';
import { FeedList } from './style';

type FeedPhotosProps = {
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
  setInfinite: Dispatch<SetStateAction<boolean>>;
  user: number | string
  page: number
};

type ResponseFetch = {
  data: Data[] | null;
  loading: boolean;
  error: null;
  request: (url: RequestInfo | URL, options: RequestInit | undefined) => Promise<{
      response: Response | undefined;
      json: Data[];
  }>;
}

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }: FeedPhotosProps) => {
  const fetchResponse: ResponseFetch = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {  
      const total = 3;

        const { url, options } = PHOTOS_GET(page, total, user);
        const {response, json} = await fetchResponse.request(url, options);
        if(response && response.ok && json.length < total) setInfinite(false)
        
    };
    fetchPhotos();
  }, [fetchResponse.request, setInfinite, page, user]);

  if (fetchResponse.error) return <Error error={fetchResponse.error} />;
  if (fetchResponse.loading) return <Loading />;
  if (fetchResponse.data)
    return (
      <FeedList className="animeLeft">
        {fetchResponse.data?.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedList>
    );
  else return null;
};

export default FeedPhotos;
