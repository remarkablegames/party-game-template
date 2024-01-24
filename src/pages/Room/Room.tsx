import { DriftDBProvider } from 'driftdb-react';
import ConnectionDetails from 'src/components/ConnectionDetails';
import { DRIFTDB_URL } from 'src/config';

export default function Room() {
  return (
    <DriftDBProvider api={DRIFTDB_URL}>
      <ConnectionDetails />
    </DriftDBProvider>
  );
}
