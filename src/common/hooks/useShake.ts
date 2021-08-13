import React, { useEffect, useCallback, useRef } from 'react';

export const useShakeAnimation = (): [React.RefObject<any>, () => void] => {
  const ref = useRef<HTMLElement>(null);

  const handleShake = useCallback(() => {
    const { current } = ref;
    if (current) {
      current.classList.remove('shake-animation-init');
      current.classList.add('shake-animation');
    }
  }, [ref]);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener('animationend', () => current.classList.remove('shake-animation'));
    }
  }, [ref]);

  return [ref, handleShake];
};
