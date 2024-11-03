import React, { useState, useCallback, useEffect } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import {useTelegram} from '../../hooks/useTelegram.js';


const products = [
    {id: '1', title: 'Кроссовки Fila', price: 5500, description: 'Белые, спортивный стиль'},
    {id: '2', title: 'Пуховик Adidas', price: 14000, description: 'Черный, короткий, с капюшоном, демисезон'},
    {id: '3', title: 'Штаны Fred Perry', price: 6000, description: 'Зеленые, slim'},
    {id: '4', title: 'Кроссовки Nike', price: 18000, description: 'Серые, спортивный стиль'},
    {id: '5', title: 'Шапка Termit', price: 800, description: 'Тёмно-синяя, текстиль'},
    {id: '6', title: 'Футболка Ellesse', price: 4500, description: 'Коричневая, спортивный стиль, хлопок'},
    {id: '7', title: 'Шорты Protest', price: 1500, description: 'Серые, спортивный стиль'},
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return acc += item.price;
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const {tg, queryId} = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
        products: addedItems,
        totalPrice: getTotalPrice(addedItems),
        queryId: queryId
    }
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}, [addedItems, queryId])

useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
        tg.offEvent('mainButtonClicked', onSendData);
    }
}, [])

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id); //boolean
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if(newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)}`
      })
    }
  }
  
  
  return (
    <div className={'list'}>
        {products.map(item => (
            <ProductItem key={item.id} product={item} onAdd={onAdd} className={'item'} />
        ))}
    </div>
  )
}

export default ProductList