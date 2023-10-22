import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

import { ReactComponent as MoreSvg } from '../../assets/adicionar.svg';
import { ButtonMore } from './style';

import { RootReducer, useAppDispatch } from '../../store';
import { getPhotosAsync } from '../../store/reducers/feed';

import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';

const Feed = ({ user }: {user: number | string}) => {

  const [page, setPages] = useState(1);
  const dispatch = useAppDispatch()
  const {list, loading, error} = useSelector((state: RootReducer) => state.feed)

  useEffect(() => {
      dispatch(getPhotosAsync({page, user}))
  }, [page, user])

  if (error) return <Error error='Foto não encontrada.' />;
  if (loading) return <Loading />;
  if(!list) return null

  return (
    <div> 
        <FeedModal />
        <FeedPhotos/>
        {list?.length === 0 ? (
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
        <ButtonMore title='recarregar'  onClick={() => setPages(1)}>
        <MoreSvg/>
        </ButtonMore>
         </>
        ) : (
          <ButtonMore title='Mais fotos' onClick={() => setPages(page + 1)}>
            <MoreSvg/>
          </ButtonMore>
        )}
    </div>
  );
};

export default Feed;
