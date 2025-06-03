import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <ItemListContainer tempMessage="Aca estaran los productos" />
      </Container>
    </>
  );
}

export default App;