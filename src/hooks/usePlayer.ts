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
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      state[payload.playerId] = state[payload.playerId] || {};
      const player = state[payload.playerId];

      switch (type) {
        case ActionType.active:
          if (typeof payload.active === 'boolean') {
            player.active = payload.active;
          }
          break;

        case ActionType.nickname:
          if (payload.nickname) {
            player.nickname = payload.nickname;
          }
          break;
      }

      setPlayer(state[playerId]);
      return state;
    },
    initialReducerState,
  );

  return {
    player,
    playerId,
    players,

    activePlayersCount: Object.values(players).filter(({ active }) => active)
      .length,

    setPlayerActive: (active: boolean) => {
      dispatch({
        type: ActionType.active,
        payload: { playerId, active },
      });
    },

    setPlayerNickname: (nickname: string) => {
      dispatch({
        type: ActionType.nickname,
        payload: { playerId, nickname },
      });
    },
  };
}
