import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Dialog from 'src/components/Dialog';
import { getLocalStorageNickname, setLocalStorageNickname } from 'src/helpers';
import { usePlayer } from 'src/hooks';

export default function Nickname() {
  const [open, setOpen] = useState(true);
  const [nickname, setNickname] = useState(getLocalStorageNickname());
  const { setPlayerNickname } = usePlayer();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNickname(event.target.value);
  }

  return (
    <Dialog
      open={open}
      id="nickname"
      onSave={() => {
        setPlayerNickname(nickname);
        setLocalStorageNickname(nickname);
        setOpen(false);
      }}
      title="Choose a nickname"
    >
      <TextField
        autoFocus
        label="Enter your nickname"
        margin="dense"
        onChange={handleChange}
        placeholder={nickname || 'Nickname'}
        required
        value={nickname}
        variant="outlined"
      />
    </Dialog>
  );
}
