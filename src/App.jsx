// App.jsx
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavigationError from './components/NavigationError';
import CartDetails from './components/CartDetails';
import CheckoutContainer from './components/CheckoutContainer';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes,  Route } from 'react-router';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="*" element={<NavigationError/>} />
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;