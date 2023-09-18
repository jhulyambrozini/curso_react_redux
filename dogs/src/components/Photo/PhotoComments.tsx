import { useState } from "react"
import { useUser } from "../../context/UserContext"
import PhotoCommentsForm from "./PhotoCommentsForm"

type PhotoCommentsProps = {
    id: number
    comments: Comments[]
}

const PhotoComments = ({id, comments}: PhotoCommentsProps) => {
  const {login} = useUser()
  const [commentsState, setCommentsState] = useState(() => comments)
  return (
    <>
      <ul>
        {commentsState.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
        {login && <PhotoCommentsForm id={id} setComments={setCommentsState} />}
    </>
  )
}

export default PhotoComments