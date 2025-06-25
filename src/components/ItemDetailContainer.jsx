import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const modelItem = {
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  };

  const [item, setItem] = useState(modelItem);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        setItem(res);
        setLoading(false);
      });
  }, [id]);

  return <ItemDetail item={item} loading={loading} />;
}

export default ItemDetailContainer;