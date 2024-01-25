enum LocalStorageKey {
  host = 'host',
  nickname = 'nickname',
}

const TRUE = 'true';

export function getLocalStorageHost(): boolean {
  return localStorage.getItem(LocalStorageKey.host) === TRUE;
}

export function setLocalStorageHost(isHost: boolean): void {
  if (isHost) {
    localStorage.setItem(LocalStorageKey.host, TRUE);
  } else {
    localStorage.removeItem(LocalStorageKey.host);
  }
}

export function getLocalStorageNickname(): string {
  return localStorage.getItem(LocalStorageKey.nickname) || '';
}

export function setLocalStorageNickname(nickname: string): void {
  localStorage.setItem(LocalStorageKey.nickname, nickname);
}
