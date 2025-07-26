import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CheckoutForm({ formData, error, onChange, onSubmit }) {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
    if (!error) {
      clearCart(); 
      navigate('/');
    }
  };

  return (
    <Container sx={{ width: '100vw', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <Box sx={{ minWidth: 500, width: '100%', maxWidth: 800, p: 3, border: '1px solid #ccc', borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h4" gutterBottom textAlign="center">Checkout</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={onChange}
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Nombre Completo"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              fullWidth
              required
              variant="outlined"
            />
            {error && <Typography color="error" textAlign="center">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'center', width: { xs: '100%', md: '50%' } }}>
              Finalizar Compra
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default CheckoutForm;
