import { Typography, Box } from '@mui/material';

function ItemListContainer({ tempMessage }) {
  return (
    <Box sx={{ py: 20, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {tempMessage}
      </Typography>
    </Box>
  );
}

export default ItemListContainer;