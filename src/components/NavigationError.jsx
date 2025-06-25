import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function NavigationError() {

  return (
    <Box
      sx={{
        pt: { xs: 15, md: 20 },
        width: '100vw',
        height: '83.5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 80}} />
      <Typography variant="h4" color="error" gutterBottom>
        Oops! Pagina No encontrada
      </Typography>
      <Typography variant="body1">
        La pagina que estas buscando no existe
      </Typography>
    </Box>
  );
}

export default NavigationError;