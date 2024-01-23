import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          {/* flexGrow is on Box so Link does not take full width */}
          <Box sx={{ flexGrow: 1 }}>
            <Link
              color="inherit"
              component={RouterLink}
              to="/"
              underline="hover"
              variant="h6"
            >
              Party Game Template
            </Link>
          </Box>

          <IconButton
            aria-label="Open GitHub repository"
            color="inherit"
            component={Link}
            href="https://github.com/remarkablegames/party-game-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
