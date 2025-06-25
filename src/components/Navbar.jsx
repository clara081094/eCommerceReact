import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';
import { PermIdentity } from '@mui/icons-material';
import {
  toolbarStyles,
  iconsBoxStyles,
} from '../styles/navbar.styles.js';
import { MENU } from '../constans/routes.js'
import { Link } from 'react-router'

function Navbar() {
    const optionsMenu = MENU;
    return (
    <AppBar color="default">
      <Toolbar sx={toolbarStyles}>
        <Typography variant="h6" component="h1">
          MI TIENDA
        </Typography>
        <Box sx={iconsBoxStyles}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <PermIdentity />
          </IconButton>
          <CartWidget />
        </Box>
      </Toolbar>
      <Toolbar sx={toolbarStyles}>
        {optionsMenu.map((option) => (
          <Button 
            key={option} 
            color="inherit"
            component={Link}
            to={option.toLowerCase() === 'home' ? '/' : `/category/${option.toLowerCase()}`}
          >
            {option}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
