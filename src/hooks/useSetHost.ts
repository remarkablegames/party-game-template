import { useEffect } from 'react';
import { getLocalStorageHost, setLocalStorageHost } from 'src/helpers';

import { useHost } from './useHost';
import { usePlayer } from './usePlayer';

export function useSetHost() {
  const { playerId } = usePlayer();
  const { host, setHost } = useHost();

  useEffect(() => {
    if (!host && getLocalStorageHost()) {
      setHost(playerId);
      setLocalStorageHost(false);
    }
  }, []);
}
