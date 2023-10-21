import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';
import { ReactComponent as MoreSvg } from '../../assets/adicionar.svg';

import { RootReducer, useAppDispatch } from '../../store';
import { getPhotosAsync } from '../../store/reducers/feed';


import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';
import { ButtonMore, FeedContainer } from './style';

const Feed = ({ user }: {user: number | string}) => {

  const [page, setPages] = useState(1);
  const dispatch = useAppDispatch()
  let total = 3
  const {list, loading, error} = useSelector((state: RootReducer) => state.feed)

  useEffect(() => {
      dispatch(getPhotosAsync({page, total, user}))
  }, [page, user])

  
  if (error) return <Error error='Foto não encontrada.' />;
  if (loading) return <Loading />;
  if(!list) return null

  return (
    <FeedContainer> 
        <FeedModal />
        <FeedPhotos/>
        {list?.length === 0 ?  (
          <>
           <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
          <ButtonMore  onClick={() => setPages(1)}>RECARREGAR</ButtonMore>
         </>
        ) : (
          <ButtonMore onClick={() => setPages(page + 1)}>
            <MoreSvg/>
          </ButtonMore>
        )}
    </FeedContainer>
  );
};

export default Feed;
