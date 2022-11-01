import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useAsync} from '../../hooks/useAsync'
import Loader from '../Loader/Loader';
import { useParams} from 'react-router-dom'
import { getProductById } from '../../services/firestore/products';

const ItemDetailContainer = () => {


  const { productId } = useParams()

  console.log(productId)

  const getProductsWithCategory = () => getProductById(productId)
  const { data: products, error, loading } = useAsync(getProductsWithCategory, [productId])



  if(loading) {
    return     <Loader />

}

if(error) {
  return <h1>Hubo un error...</h1>
}

return (
  <div className='ItemDetailContainer' >
      <ItemDetail key= {products.id} {...products} />
     
  </div>
)
}

export default ItemDetailContainer









  
  






