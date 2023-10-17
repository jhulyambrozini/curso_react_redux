import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';

import { CommentButton, CommentForm, CommentTextarea } from './style';
import { ReactComponent as SendIcon } from '../../../assets/enviar.svg';

import Error from '../../../helpers/Error';
import { useCommentPostMutation } from '../../../services/api';

type PhotoCommentsFormProps = {
  id: number;
  setComments: Dispatch<SetStateAction<Comments[]>>;
  single: boolean;
};

const PhotoCommentsForm = ({
  id,
  setComments,
  single,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState('');
  const [postComment, {isError}] = useCommentPostMutation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    if (token && comment) {
      try {
        const result = await postComment({
          id: id,
          body: {
            comment: comment
          },
          token: token
        })
       
        if('data' in result && result.data){
          setComment('')
          setComments((prevComments: Comments[]) => [...prevComments, result.data])
        } else if('error' in result){
          console.error(result.error)
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleComment: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setComment(target.value);
  };
  return (
    <CommentForm
      onSubmit={handleSubmit}
      single={single}
    >
      <CommentTextarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={handleComment}
      />
      <CommentButton>
        <SendIcon />
      </CommentButton>

      {isError && <Error error='Um erro aconteceu' />}
    </CommentForm>
  );
};

export default PhotoCommentsForm;
