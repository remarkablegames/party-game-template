import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Dialog from 'src/components/Dialog';
import { usePlayer } from 'src/hooks';

export default function Nickname() {
  const [open, setOpen] = useState(true);
  const [nickname, setNickname] = useState('');
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
        setOpen(false);
      }}
      title="Choose a nickname"
    >
      <TextField
        label="Enter your nickname"
        margin="dense"
        onChange={handleChange}
        required
        value={nickname}
        variant="outlined"
      />
    </Dialog>
  );
}
