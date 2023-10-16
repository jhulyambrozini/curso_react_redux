import { ButtonDeletePhoto } from './style';

import { usePhotoDeleteMutation } from '../../../services/api';

const PhotoDelete = ({ id }: {id: number}) => {
  const [photoDelet, { isLoading }] = usePhotoDeleteMutation()

  const handleClick = () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const token = window.localStorage.getItem('token');

      if (token) {
          photoDelet({id, token})
          .unwrap()
          .then(() => window.location.reload())
          .catch((error) => console.error('rejected', error))
      }
    }
  };
  return (
    <div>
      {isLoading ? (
        <ButtonDeletePhoto disabled>Deletando...</ButtonDeletePhoto>
      ) : (
        <ButtonDeletePhoto onClick={handleClick}>Deletar</ButtonDeletePhoto>
      )}
    </div>
  );
};

export default PhotoDelete;
