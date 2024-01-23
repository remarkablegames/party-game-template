import CircularProgress from '@mui/material/CircularProgress';
import { lazy, Suspense } from 'react';

const Room = lazy(() => import('./Room'));

export default function RoomLoader() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Room />
    </Suspense>
  );
}
