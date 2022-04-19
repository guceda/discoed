import { useEffect, useCallback } from 'react';

const useKeydown = (
  container: any,
  key: string,
  cb: () => any,
  metakey?: boolean,
) => {
  const action = useCallback(
    (event: KeyboardEvent) => {
      if (metakey ? event.metaKey && event.key === key : event.key === key) {
        cb();
      }
    },
    [cb, key, metakey],
  );

  useEffect(() => {
    if (container && container.addEventListener) {
      container.addEventListener('keydown', action);
    }
    return () => container?.removeEventListener('keydown', action);
  }, [action, container, key]);
};

export default useKeydown;
