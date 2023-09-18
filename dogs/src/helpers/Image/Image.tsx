import {
  ComponentProps,
  ReactEventHandler,
  SyntheticEvent,
  useState,
} from 'react';
import { ImgWrapper, Skeleton } from './style';

type ImageProps = ComponentProps<'img'> & {
  alt: string;
};

type SizedEvent = {
  style: {
    opacity: number;
  };
};
const Image = ({ alt, ...props }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  const isSizedEvent = (e: any): e is SizedEvent => {
    return e && e.style.opacity !== undefined;
  };

  const handleLoad: ReactEventHandler<HTMLImageElement> = ({ target }) => {
    if (isSizedEvent(target)) {
      setSkeleton(false);
      target.style.opacity = 1;
    }
  };
  return (
    <ImgWrapper>
      {skeleton && <Skeleton></Skeleton>}

      <img
        onLoad={handleLoad}
        src=""
        alt={alt}
        {...props}
      />
    </ImgWrapper>
  );
};

export default Image;
