import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProductById} from '../../asyncMock'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const { productId } = useParams()
  

    useEffect(() => {
        getProductById(productId)
           .then((response)=>setProduct(response))
           .catch((error) => console.log(error))
           .finally(()=>{
            setLoading(true);
        })
    }, [productId])

    

   return (
    <div className='itemDetailContainer'>
      {loading? (
    
        <ItemDetail key={product.id} {...product} />
      ):(
        <Loader/>
      )}
      </div>
  )
}

export default ItemDetailContainer;