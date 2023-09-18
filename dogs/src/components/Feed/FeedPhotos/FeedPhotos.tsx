import { Dispatch, SetStateAction, useEffect } from 'react';
import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading';
import { FeedList } from './style';

type FeedPhotosProps = {
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
};

type ResponseFetch = {
  data: Data[] | null;
  loading: boolean;
  error: null;
  request: (url: RequestInfo | URL, options: RequestInit | undefined) => Promise<{
      response: Response | undefined;
      json: any;
  }>;
}

const FeedPhotos = ({ setModalPhoto }: FeedPhotosProps) => {
  const response: ResponseFetch = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const page = '1';
      const total = '6';
      const user = '0';
      const { url, options } = PHOTOS_GET(page, total, user);

      const result = await response.request(url, options);
    };
    fetchPhotos();
  }, [response.request]);

  if (response.error) return <Error error={response.error} />;
  if (response.loading) return <Loading />;
  if (response.data)
    return (
      <FeedList className="animeLeft">
        {response.data?.map((photo) => (
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
