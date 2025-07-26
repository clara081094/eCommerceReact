import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Typography, Box, Table, TableBody, TableCell, TableRow, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import { imageStyles } from '../styles/cartDetails.styles';

function CartDetails() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalles del Carrito</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">El carrito está vacío.</Typography>
      ) : (
        <>
          <Table>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Box component="img" src={item.p_image} alt={item.p_name} sx={imageStyles} />
                  </TableCell>
                  <TableCell>{item.p_name}</TableCell>
                  <TableCell>Cantidad: {item.quantity}</TableCell>
                  <TableCell>Precio: ${item.p_price}</TableCell>
                  <TableCell>Subtotal: ${item.p_price * item.quantity}</TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right"><strong>Total:</strong></TableCell>
                <TableCell><strong>${getCartTotal()}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: 'flex-start' }}>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Ir al Checkout
            </Button>
            <Button variant="contained" color="error" onClick={clearCart}>
              Vaciar Carrito
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default CartDetails;
