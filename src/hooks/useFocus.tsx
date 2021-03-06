import { useCallback, useRef } from 'react';

const useFocus = () => {
  const htmlElRef = useRef<any>(null);
  const setFocus = useCallback(() => {
    if (htmlElRef.current) {
      htmlElRef.current.focus();
      htmlElRef.current.select();
    }
  }, [htmlElRef]);

  return [htmlElRef, setFocus];
};

export default useFocus;
