import { configureStore } from '@reduxjs/toolkit';
import { DEV } from 'src/config';

import { snackbarSlice, userSlice } from './slices';

export const store = configureStore({
  reducer: {
    [snackbarSlice.name]: snackbarSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  devTools: DEV,
});
