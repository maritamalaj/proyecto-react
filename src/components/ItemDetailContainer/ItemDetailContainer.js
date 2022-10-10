import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProductById} from '../../asyncMock'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()
  

    useEffect(() => {
        getProductById(productId).then((response)=>{
            setProduct(response)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return <Loader />
    };

  return (
    <div className='itemDetailContainer'>
       <h1>DETALLE DEL PRODUCTO</h1>
        <ItemDetail key={product.id} {...product} />
    </div>
  )
}

export default ItemDetailContainer;