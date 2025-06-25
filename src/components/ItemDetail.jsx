import { Container, Typography, Box, CircularProgress } from '@mui/material';
import ItemCount from './ItemCount';

function ItemDetail({ item, loading }) {
  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>Cargando producto...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, pt: { xs: 15, md: 20 } }}>
      <Typography variant="h4" gutterBottom>{item.title}</Typography>
      <Box
        component="img"
        src={item.thumbnail}
        alt={item.title}
        sx={{ width: '100%', maxWidth: 400, borderRadius: 2, mb: 2 }}
      />
      <Typography variant="body1" sx={{ mb: 2 }}>{item.description}</Typography>
      <Typography variant="h6" color="primary">Precio: ${item.price}</Typography>
      <ItemCount />
    </Container>
  );
}

export default ItemDetail;