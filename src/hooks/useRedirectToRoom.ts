import { useConnectionStatus } from 'driftdb-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DRIFTDB_ROOM = '_driftdb_room';

export function useRedirectToRoom() {
  const { debugUrl } = useConnectionStatus() as { debugUrl: string };
  const navigate = useNavigate();

  useEffect(() => {
    if (!debugUrl) {
      return;
    }

    const room = new URLSearchParams(location.search).get(DRIFTDB_ROOM);

    if (room) {
      navigate(`/room/${room}`);
    }
  }, [debugUrl]);
}
