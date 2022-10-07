/*import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import {getProductoById} from'../asyncMock';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
  return (
    <div className='itemDetailContainer'>
        <h1>PRODUCT</h1>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer;*/

import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProductoById} from '../../asyncMock'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()
    console.log(productId)


    useEffect(() => {
        getProductoById(productId).then((resolve)=>{
            setProduct(resolve)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return <Loader />
    };

  return (
    <div className='itemDetailContainer'>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer;