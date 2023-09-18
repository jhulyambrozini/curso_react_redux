import { useEffect, useState } from 'react';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

type FeedProps = {
  user: number
};

const Feed = ({ user }: FeedProps) => {
  const [modalPhoto, setModalPhoto] = useState<Data | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    const inifineScroll = () => {
      
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
       
        if (scroll > height * 0.75 && !wait) {  
          setPages((pages) => [...pages, pages.length + 1]); 
          wait = true;
         
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', inifineScroll);
    window.addEventListener('scroll', inifineScroll);

    return () => {
      window.removeEventListener('wheel', inifineScroll);
      window.removeEventListener('scroll', inifineScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto}
          setModalPhoto={setModalPhoto}
        />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
