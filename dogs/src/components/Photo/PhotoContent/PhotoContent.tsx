import { Link } from "react-router-dom"
import { AttributesList, Author, DatailsContainer, ImageContainer, PhotoContainer, Viwes } from "./style"
import PhotoComments from "../PhotoComments"

type PhotoContentProps = {
  data: DataFeedPhoto
}

const PhotoContent = ({data}: PhotoContentProps) => {
  const {photo, comments} = data
  
  return (
    <PhotoContainer>
      <ImageContainer>
        <img src={photo.src} alt={photo.title} />
      </ImageContainer>
      <DatailsContainer>
        <div>
          <Author>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <Viwes>{photo.acessos}</Viwes>
          </Author>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <AttributesList>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {Number(photo.idade) > 1 ? 'anos' : 'ano'}</li>
          </AttributesList>
        </div>
      </DatailsContainer>
      <PhotoComments id={photo.id} comments={comments} />
    </PhotoContainer>
  )
}

export default PhotoContent