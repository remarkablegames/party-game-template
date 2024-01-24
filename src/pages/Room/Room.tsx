import { DriftDBProvider } from 'driftdb-react';
import ConnectionDetails from 'src/components/ConnectionDetails';
import Nickname from 'src/components/Nickname';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <ConnectionDetails />
      <Nickname />
    </DriftDBProvider>
  );
}
