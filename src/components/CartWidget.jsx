import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;