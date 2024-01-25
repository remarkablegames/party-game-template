enum LocalStorageKey {
  nickname = 'nickname',
}

export function getLocalStorageNickname(): string {
  return localStorage.getItem(LocalStorageKey.nickname) || '';
}

export function setLocalStorageNickname(nickname: string): void {
  localStorage.setItem(LocalStorageKey.nickname, nickname);
}
