import React, { useCallback, useRef } from 'react';

export const useFadeAnimation = (): [React.RefObject<any>, (visible: boolean) => void] => {
  const ref = useRef<HTMLElement>(null);

  const handleFade = useCallback(
    (visible: boolean) => {
      const { current } = ref;
      if (current) {
        if (visible) {
          current.classList.add('fade-animation');
        } else {
          current.classList.remove('fade-animation');
        }
      }
    },
    [ref]
  );

  return [ref, handleFade];
};
