import { store } from '../store';

export type RootState = ReturnType<typeof store.getState>;

export enum DatabaseKey {
  players = 'players',
}
