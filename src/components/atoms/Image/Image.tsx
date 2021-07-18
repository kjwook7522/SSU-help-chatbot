import React from 'react';

interface Props {
  alt: string;
  _ref?: React.LegacyRef<HTMLImageElement>
}

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & Props> = ({ alt, _ref, ...props }) => (
  <img alt={alt} ref={_ref} {...props} />
);

export default React.memo(Image);
