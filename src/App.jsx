// App.jsx
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavigationError from './components/NavigationError';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes,  Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="*" element={<NavigationError/>} />
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;