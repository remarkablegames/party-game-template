import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Typography>
      Welcome to{' '}
      <Link
        href="https://github.com/remarkablegames/party-game-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        Party Game Template
      </Link>
      !
    </Typography>
  );
}
