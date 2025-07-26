import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../firebase/db'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const modelItem = {
    p_name: '',
    p_description: '',
    p_price: 0,
    p_image: '',
  };

  const [item, setItem] = useState(modelItem);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getItem(id).then(res => {
        setItem(res);
        setLoading(false);
    });
  }, [id]);

  return <ItemDetail item={item} loading={loading} />;
}

export default ItemDetailContainer;