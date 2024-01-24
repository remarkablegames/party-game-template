import { Route } from 'react-router-dom';
import Layout from 'src/components/Layout';
import ErrorBoundary from 'src/pages/ErrorBoundary';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import Room from 'src/pages/Room';

const routes = (
  <Route path="/" element={<Layout />}>
    <Route errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/room" element={<Room />} />
      {/* <Route path="/room/:room" element={<Room />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

export default routes;
