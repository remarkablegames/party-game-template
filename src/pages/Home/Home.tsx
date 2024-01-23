import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h1" variant="h2" gutterBottom>
        Party Game Template
      </Typography>

      <Button variant="contained" size="large">
        Create room
      </Button>
    </Box>
  );
}
