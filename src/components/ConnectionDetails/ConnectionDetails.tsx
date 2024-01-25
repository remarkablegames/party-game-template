import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { RoomQRCode, useConnectionStatus } from 'driftdb-react';
import { useEffect, useState } from 'react';
import { useHost, usePlayer, useSetHost, useSetPlayerActive } from 'src/hooks';

export default function ConnectionDetails() {
  useSetHost();
  useSetPlayerActive();

  const { host } = useHost();
  const { playerId, players } = usePlayer();
  const [room, setRoom] = useState('');

  const { connected, debugUrl } = useConnectionStatus() as {
    connected: boolean;
    debugUrl: string;
  };

  useEffect(() => {
    if (!connected) {
      return;
    }

    const driftdbRoom = new URLSearchParams(location.search).get(
      '_driftdb_room',
    );

    if (driftdbRoom) {
      setRoom(driftdbRoom);
    }
  }, [connected]);

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room: <code>{room}</code>
      </Typography>

      <Typography paragraph>
        Player ID: <code>{playerId}</code>{' '}
        {playerId === host && <em>(Host)</em>}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>connected</TableCell>
              <TableCell>debugUrl</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>{String(connected)}</TableCell>

              <TableCell>
                {debugUrl && (
                  <Link
                    href={debugUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {debugUrl}
                  </Link>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <Alert>
        <AlertTitle>Players</AlertTitle>
        <pre>
          <code>{JSON.stringify(players, null, 4)}</code>
        </pre>
      </Alert>

      <RoomQRCode />
    </>
  );
}
