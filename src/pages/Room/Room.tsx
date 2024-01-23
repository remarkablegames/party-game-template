import { DriftDBProvider } from 'driftdb-react';
import RoomDetails from 'src/components/RoomDetails';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <RoomDetails />
    </DriftDBProvider>
  );
}
