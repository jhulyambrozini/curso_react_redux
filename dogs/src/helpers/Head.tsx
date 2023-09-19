import { useEffect } from 'react';

type HeadProps = {
  title: string;
  description: string;
};

const Head = (props: HeadProps) => {
  useEffect(() => {
    document.title = props.title + ' | Dogs';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', props.description || '');
  }, [props]);

  return <></>;
};

export default Head;
