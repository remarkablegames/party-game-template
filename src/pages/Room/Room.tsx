import { DriftDBProvider } from 'driftdb-react';
import { useParams } from 'react-router-dom';
import RoomDetails from 'src/components/RoomDetails';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  const { room } = useParams<{ room: string }>();

  return (
    <DriftDBProvider api={DRIFTDB_URL} room={room}>
      <RoomDetails />
    </DriftDBProvider>
  );
}
