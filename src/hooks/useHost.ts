import { useSharedState } from 'driftdb-react';
import { DatabaseKey } from 'src/types';

export function useHost() {
  const [host, setHost] = useSharedState(DatabaseKey.host, '');
  return { host, setHost };
}
