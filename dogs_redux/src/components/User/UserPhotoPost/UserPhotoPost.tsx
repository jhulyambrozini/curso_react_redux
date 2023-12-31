import { useNavigate } from 'react-router-dom';
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';

import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { PhotoPostContainer, PreviewPhoto } from './style';

import useForm from '../../../hooks/useForm';

import Error from '../../../helpers/Error';
import Head from '../../../helpers/Head';

import { usePhotoPostMutation } from '../../../services/api';

type ImageState = {
  raw: File | null;
  preview: string | null;
};

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = useState<ImageState>({ raw: null, preview: null });
  const navigate = useNavigate();
  const [photoPost, {data, isLoading, isError}] = usePhotoPostMutation()

  useEffect(() => {
    if (data) navigate('/account');
  }, [navigate, data]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (img.raw) {
      formData.append('img', img.raw);
    }
    formData.append('nome', name.value);
    formData.append('idade', age.value);
    formData.append('peso', weight.value);

    const token = window.localStorage.getItem('token');
    if (token) {
      photoPost({
        formData,
        token
      })
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    }
  };

  return (
    <PhotoPostContainer className="animeLeft">
      <Head
        title="Poste sua foto"
        description="Formulário para envio de novas fotos"
      />
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nome"
          type="text"
          {...name}
        />
        <Input
          id="weight"
          label="Peso"
          type="number"
          {...weight}
        />
        <Input
          id="age"
          label="Idade"
          type="number"
          {...age}
        />
        <input
          className="file"
          type="file"
          name="img"
          id="img"
          onChange={handleChange}
        />
        {isLoading ? (
          <Button disabled>Postando...</Button>
        ) : (
          <Button>Postar</Button>
        )}
        {isError && <Error error="Falha ao enviar." />}
      </form>
      <div>
        {img.preview && (
          <PreviewPhoto
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></PreviewPhoto>
        )}
      </div>
    </PhotoPostContainer>
  );
};

export default UserPhotoPost;
