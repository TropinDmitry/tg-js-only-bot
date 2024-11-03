import React from 'react'
import Button from '../Button/Button'
import './ProductItem.css'
import { useState } from 'react'

const ProductItem = ({product, className, onAdd}) => {
    const [isInCart, setIsInCart] = useState(false);
    
    const onAddHandler = () => {
        onAdd(product);
        if(isInCart) {
            setIsInCart(false);
        } else {
            setIsInCart(true);
        }
    }
  
    return (
    <div className={'product ' + className}>
        <div className={'img'} />
        <div className={'title'}>{product.title}</div>
        <div className={'description'}>{product.description}</div>
        <div className={'price'}>
            <span>Цена: <b>{product.price}</b></span>
        </div>
        <Button className={'add-btn'} onClick={onAddHandler}>
            {isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
        </Button>
    </div>
  )
}

export default ProductItem