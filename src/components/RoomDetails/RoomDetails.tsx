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
import { useParams } from 'react-router-dom';
import { useRedirectToRoom } from 'src/hooks';

export default function RoomDetails() {
  useRedirectToRoom();
  const { room } = useParams();

  const { connected, debugUrl } = useConnectionStatus() as {
    connected: boolean;
    debugUrl: string;
  };

  return (
    <>
      <Typography component="h1" paragraph variant="h4">
        Room: {room}
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

      <RoomQRCode />
    </>
  );
}
