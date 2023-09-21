import { useEffect, useRef, useState } from 'react';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import { CommentsList } from './style';
import { useUser } from '../../../context/UserContext';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store';

type PhotoCommentsProps = {
  single: boolean;
};

const PhotoComments = ({ single }: PhotoCommentsProps) => {
  const { login } = useUser();
  
  const {photo, comments}: DataState = useSelector((state: RootReducer) => state.photo.data)
  const [commentsState, setCommentsState] = useState(() => comments);
  const commentSection = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    if (commentSection.current) {
      commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }
  }, [commentsState]);

  return (
    <>
      <CommentsList
        ref={commentSection}
        single={single}
      >
        {commentsState.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentsList>
      {login && (
        <PhotoCommentsForm
          single={single}
          id={photo.id}
          setComments={setCommentsState}
        />
      )}
    </>
  );
};

export default PhotoComments;
