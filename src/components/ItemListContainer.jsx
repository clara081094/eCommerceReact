import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { CATEGORY_API } from '../constans/routes';
import { getItems,getItemsByCategory } from '../firebase/db';
import  ItemList  from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const categoryPath = categoryName ? CATEGORY_API[categoryName] : null;
    if(categoryPath) {
      getItemsByCategory(categoryPath).then(res => setItems(res))
    }else{
      getItems().then(res => setItems(res))
    }

  }, [categoryName]);

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  return <ItemList items={items} onItemClick={handleItemClick} />;
}

export default ItemListContainer;