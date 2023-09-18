import { MouseEventHandler } from 'react';
import useFetch from '../../../hooks/useFetch';
import { ButtonDeletePhoto } from './style';
import { PHOTO_DELETE } from '../../../api';

type PhotoDeleteProps = {
  id: number;
};

const PhotoDelete = ({ id }: PhotoDeleteProps) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = PHOTO_DELETE(id, token);
        const { response } = await request(url, options);
        if (response && response.ok) window.location.reload();
      }
    }
  };
  return (
    <div>
      {loading ? (
        <ButtonDeletePhoto disabled>Deletando...</ButtonDeletePhoto>
      ) : (
        <ButtonDeletePhoto onClick={handleClick}>Deletar</ButtonDeletePhoto>
      )}
    </div>
  );
};

export default PhotoDelete;
