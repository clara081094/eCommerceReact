import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { CATEGORY_API } from '../constans/routes';
import ItemList from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const categoryPath = categoryName ? CATEGORY_API[categoryName] : '';
    const url = 'https://dummyjson.com/products';
    const url_category = `https://dummyjson.com/products/category/${categoryPath}`;

    fetch(categoryName ? url_category : url)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [categoryName]);

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  return <ItemList items={items} onItemClick={handleItemClick} />;
}

export default ItemListContainer;