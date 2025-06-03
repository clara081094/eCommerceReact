// App.jsx
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          px: { xs: 5, sm: 15, md: 40, lg: 100 },
          py: 4,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <ItemListContainer tempMessage="Aca estaran los productos" />
      </Box>
    </>
  );
}

export default App;