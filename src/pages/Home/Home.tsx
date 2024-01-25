import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { setLocalStorageHost } from 'src/helpers';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h1" paragraph variant="h2">
        Party Game Template
      </Typography>

      <Typography paragraph variant="h5">
        Play with your friends
      </Typography>

      <Typography sx={{ marginBottom: 3 }}>
        <Button
          component={Link}
          onClick={() => setLocalStorageHost(true)}
          size="large"
          to="/room"
          variant="contained"
        >
          Create room
        </Button>
      </Typography>

      <Card sx={{ margin: '0 auto', maxWidth: 350 }}>
        <CardHeader sx={{ paddingBottom: 0 }} title="How to play" />

        <CardContent>
          <Typography component="ol" sx={{ textAlign: 'left' }}>
            <Typography component="li">
              Click the <strong>CREATE ROOM</strong> button
            </Typography>
            <Typography component="li">
              Select the settings and start the game
            </Typography>
            <Typography component="li">
              Connect with your friends using audio/video chat
            </Typography>
            <Typography component="li">Share the room URL</Typography>
            <Typography component="li">Have fun! 🎉</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
