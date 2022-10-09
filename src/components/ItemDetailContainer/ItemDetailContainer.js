import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProductoById} from '../../asyncMock'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()
  

    useEffect(() => {
        getProductoById(productId).then((response)=>{
            setProducts(response)
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
        <ItemDetail key={products.id} {...products} />
    </div>
  )
}

export default ItemDetailContainer;