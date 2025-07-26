import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { containerStyles, iconStyles } from '../styles/navigationError.styles';

function NavigationError() {
  return (
    <Box sx={containerStyles}>
      <ErrorOutlineIcon color="error" sx={iconStyles} />
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