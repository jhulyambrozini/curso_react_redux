import { useEffect, useRef, useState } from 'react';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import { CommentsList } from './style';
import { useUser } from '../../../context/UserContext';

type PhotoCommentsProps = {
  id: number;
  comments: Comments[];
  single: boolean;
};

const PhotoComments = ({ id, comments, single }: PhotoCommentsProps) => {
  const { login } = useUser();
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
          id={id}
          setComments={setCommentsState}
        />
      )}
    </>
  );
};

export default PhotoComments;
