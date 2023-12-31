import { Dispatch, MouseEventHandler, SetStateAction, useEffect } from 'react';

import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { Modal } from './style';

import useFetch from '../../../hooks/useFetch';
import Error from '../../../helpers/Error';
import Loading from '../../../helpers/Loading/Loading';
import {PHOTO_GET } from '../../../api';

type FeedModalProps = {
  photo: Data;
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
};

type ResponseFetch = {
  data: DataFeedPhoto | null;
  loading: boolean;
  error: null;
  request: (
    url: RequestInfo | URL,
    options: RequestInit | undefined
  ) => Promise<{
    response: Response | undefined;
    json: any;
  }>;
};

const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
  const { data, error, loading, request }: ResponseFetch = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

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
          data={data}
        />
      )}
    </Modal>
  );
};

export default FeedModal;
