import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';
import { PermIdentity } from '@mui/icons-material';
import {
  appBarStyles,
  toolbarStyles,
  titleStyles,
  iconsBoxStyles,
} from '../styles/navbar.styles.js';

function Navbar() {
    const optionsMenu = ['MUJER', 'HOMBRE', 'TEEN', 'NIÑOS', 'HOME'];
    return (
    <AppBar position="static" color="default" elevation={1}>
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
    </AppBar>
  );
}

export default Navbar;
