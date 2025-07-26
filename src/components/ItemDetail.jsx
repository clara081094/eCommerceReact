import { Container, Typography, Box, CircularProgress } from '@mui/material';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { containerStyles, imageStyles, toastStyles } from '../styles/itemDetail.styles';

function ItemDetail({ item, loading }) {
  const { addToCart } = useContext(CartContext);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity);
    setToastMessage(`Se agregó ${quantity} ${item.p_name} al carrito`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>Cargando producto...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={containerStyles}>
      <Typography variant="h4" gutterBottom>{item.title}</Typography>
      <Box component="img" src={item.p_image} alt={item.p_name} sx={imageStyles} />
      <Typography variant="body1" sx={{ mb: 2 }}>{item.p_description}</Typography>
      <Typography variant="h6" color="primary">Precio: ${item.p_price}</Typography>
      <ItemCount onAddToCart={handleAddToCart} />
      {toastMessage && <Box sx={toastStyles}>{toastMessage}</Box>}
    </Container>
  );
}

export default ItemDetail;