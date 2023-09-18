import { Link } from "react-router-dom"
import { AttributesList, Author, DatailsContainer, ImageContainer, PhotoContainer, Viwes } from "./style"
import PhotoComments from "../PhotoComents/PhotoComments"
import { useUser } from "../../../context/UserContext"
import PhotoDelete from "../PhotoDelete/PhotoDelete"
import Image from "../../../helpers/Image/Image"

type PhotoContentProps = {
  data: DataFeedPhoto
}

const PhotoContent = ({data}: PhotoContentProps) => {
  const {photo, comments} = data
  const user = useUser()
  
  return (
    <PhotoContainer>
      
      <ImageContainer>
        <Image src={photo.src} alt={photo.title}  />
      </ImageContainer>
      <DatailsContainer>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            
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