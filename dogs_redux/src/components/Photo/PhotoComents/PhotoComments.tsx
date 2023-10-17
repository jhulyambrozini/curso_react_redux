import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import { CommentsList } from './style';

import { RootReducer } from '../../../store';

type PhotoCommentsProps = {
  id: number;
  comments: Comments[];
  single: boolean;
};

const PhotoComments = ({ id, comments, single }: PhotoCommentsProps) => {
  const {login} = useSelector((state: RootReducer) => state.user)
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
