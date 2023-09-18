import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { PhotoItem, Views } from "./style"

type Props = {
  photo: Data
  setModalPhoto: Dispatch<SetStateAction<null | Data>>;
}
const FeedPhotoItem = ({photo, setModalPhoto}: Props) => {
  const handleClick: MouseEventHandler<HTMLLIElement> = () => {
    setModalPhoto(photo)
  }

  return (
    <PhotoItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <Views>{photo.acessos}</Views>
    </PhotoItem>
  )
}

export default FeedPhotoItem