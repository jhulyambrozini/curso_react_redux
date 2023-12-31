import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { CommentButton, CommentForm, CommentTextarea } from './style';
import { ReactComponent as SendIcon } from '../../../assets/enviar.svg';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../api';
import Error from '../../../helpers/Error';

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
  const { request, error } = useFetch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    if (token && comment) {
      const { url, options } = COMMENT_POST(id, { comment }, token);

      const res = await request(url, options);
      const json: Comments = res.json;

      if (res.response && res.response.ok) {
        setComment('');
        setComments((prevComments: Comments[]) => [...prevComments, json]);
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
      <Error error={error} />
    </CommentForm>
  );
};

export default PhotoCommentsForm;
