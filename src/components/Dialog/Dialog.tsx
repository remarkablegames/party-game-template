import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  children: React.ReactNode;
  id: string;
  onClose?: () => void;
  onSave: () => void;
  open?: boolean;
  title: React.ReactNode;
}

export default function CustomDialog(props: Props) {
  const titleId = `dialog-title-${props.id}`;
  const contentId = `dialog-content-${props.id}`;

  return (
    <Dialog
      aria-describedby={contentId}
      aria-labelledby={titleId}
      onClose={props.onClose}
      open={Boolean(props.open)}
    >
      <DialogTitle id={titleId}>{props.title}</DialogTitle>

      <DialogContent>
        <DialogContentText component="div" id={contentId}>
          {props.children}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        {props.onClose && <Button onClick={props.onClose}>Cancel</Button>}

        <Button onClick={props.onSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
