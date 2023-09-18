import { useEffect, useRef, useState } from "react"
import { useUser } from "../../../context/UserContext"
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm"
import { CommentsList } from "./style"

type PhotoCommentsProps = {
    id: number
    comments: Comments[]
}

const PhotoComments = ({id, comments}: PhotoCommentsProps) => {
  const {login} = useUser()
  const [commentsState, setCommentsState] = useState(() => comments)
  const commentSection = useRef<null | HTMLUListElement>(null)

  useEffect(()=>{
    if(commentSection.current) {
      commentSection.current.scrollTop = commentSection.current.scrollHeight
    }
  },[commentsState])

  return (
    <>
      <CommentsList ref={commentSection}>
        {commentsState.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentsList>
        {login && <PhotoCommentsForm id={id} setComments={setCommentsState} />}
    </>
  )
}

export default PhotoComments