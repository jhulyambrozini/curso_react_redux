import { Link } from 'react-router-dom';

import PhotoComments from '../PhotoComents/PhotoComments';
import PhotoDelete from '../PhotoDelete/PhotoDelete';

import {
  AttributesList,
  Author,
  DatailsContainer,
  ImageContainer,
  PhotoContainer,
  Viwes,
} from './style';
import Image from '../../../helpers/Image/Image';
import { useUser } from '../../../context/UserContext';

type PhotoContentProps = {
  data: DataFeedPhoto;
  single: boolean;
};

const PhotoContent = ({ data, single }: PhotoContentProps) => {
  const { photo, comments } = data;
  const user = useUser();

  return (
    <PhotoContainer single={single}>
      <ImageContainer single={single}>
        <Image
          src={photo.src}
          alt={photo.title}
        />
      </ImageContainer>
      <DatailsContainer single={single}>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <Viwes>{photo.acessos}</Viwes>
          </Author>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <AttributesList>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {Number(photo.idade) > 1 ? 'anos' : 'ano'}
            </li>
          </AttributesList>
        </div>
      </DatailsContainer>
      <PhotoComments
        single={single}
        id={photo.id}
        comments={comments}
      />
    </PhotoContainer>
  );
};

export default PhotoContent;
