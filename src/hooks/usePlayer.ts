import { useSharedReducer, useUniqueClientId } from 'driftdb-react';
import { useState } from 'react';
import { DatabaseKey } from 'src/types';

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

interface ActionPayload {
  playerId: string;
  active?: boolean;
  nickname?: string;
}

enum ActionType {
  active = 'active',
  nickname = 'nickname',
}

const initialPlayerState = {
  nickname: '',
  active: false,
};

export function usePlayer() {
  const playerId = useUniqueClientId();
  const [player, setPlayer] = useState(initialPlayerState);

  const initialReducerState = {
    [playerId]: initialPlayerState,
  };

  const [players, dispatch] = useSharedReducer<
    typeof initialReducerState,
    Action
  >(
    DatabaseKey.players,
    (state, action) => {
      const { payload, type } = action;
      state[payload.playerId] = state[payload.playerId] || {};
      const player = state[payload.playerId];

      switch (type) {
        case ActionType.active:
          player.active = payload.active!;
          setPlayer(player);
          return state;

        case ActionType.nickname:
          player.nickname = payload.nickname!;
          setPlayer(player);
          return state;

        default:
          return state;
      }
    },
    initialReducerState,
  );

  return {
    player,
    playerId,

    activePlayersCount: Object.values(players).filter(({ active }) => active)
      .length,

    setPlayerActive: (active: boolean) =>
      dispatch({
        type: ActionType.active,
        payload: { playerId, active },
      }),

    setPlayerNickname: (nickname: string) =>
      dispatch({
        type: ActionType.nickname,
        payload: { playerId, nickname },
      }),
  };
}
