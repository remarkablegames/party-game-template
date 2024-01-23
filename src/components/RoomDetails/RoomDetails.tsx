import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useConnectionStatus } from 'driftdb-react';

export default function RoomDetails() {
  const { connected, debugUrl } = useConnectionStatus() as {
    connected: boolean;
    debugUrl: string;
  };

  return (
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
                <Link href={debugUrl} rel="noopener noreferrer" target="_blank">
                  {debugUrl}
                </Link>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
