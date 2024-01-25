import { useEffect } from 'react';

import { usePlayer } from './usePlayer';

const visibilitychange = 'visibilitychange';
const hidden = 'hidden';

export function useSetPlayerActive() {
  const { setPlayerActive } = usePlayer();

  useEffect(() => {
    setPlayerActive(true);

    function handleVisibilityChange() {
      setPlayerActive(document.visibilityState !== hidden);
    }

    document.addEventListener(visibilitychange, handleVisibilityChange);

    return function unsubscribe() {
      document.removeEventListener(visibilitychange, handleVisibilityChange);
    };
  }, []);
}
