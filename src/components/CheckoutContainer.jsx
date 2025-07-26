import { useState, useContext } from 'react';
import { createDocument } from '../firebase/db';
import { CartContext } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';
import Typography from '@mui/material/Typography';

function CheckoutContainer() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cart, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, fullName, phone } = formData;

    if (!email || !fullName || !phone) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    setError('');

    try {
      const orderData = {
        email,
        fullName,
        phone,
        cart,
        date: new Date().toISOString(),
      };

      const docId = await createDocument('orders', orderData);
      setOrderId(docId);
      clearCart();
      alert(`Compra finalizada con éxito. ID de la orden: ${docId}`);
    } catch (error) {
      console.error('Error al guardar la orden:', error);
      alert('Hubo un error al finalizar la compra.');
    }
  };

  return (
    <>
      <CheckoutForm
        formData={formData}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {orderId && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h6" color="primary">
            ID de la orden: {orderId}
          </Typography>
        </div>
      )}
    </>
  );
}

export default CheckoutContainer;
