import { snackbarSlice, userSlice } from './slices';

export const actions = {
  ...snackbarSlice.actions,
  ...userSlice.actions,
};

export const resetActions = [actions.resetSnackbar, actions.resetUser];
