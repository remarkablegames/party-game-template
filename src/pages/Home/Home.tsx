import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h1" paragraph variant="h2">
        Party Game Template
      </Typography>

      <Button component={Link} size="large" to="/room" variant="contained">
        Create room
      </Button>
    </Box>
  );
}
