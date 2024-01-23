import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import routes from 'src/routes';
import { store } from 'src/store';

import Snackbar from '../Snackbar';

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
        <Snackbar />
      </Provider>
    </StrictMode>
  );
}
