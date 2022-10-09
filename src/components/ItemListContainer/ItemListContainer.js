import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

const ItemListContainer=({greeting})=> {
  const[products, setProducts]=useState([])
  const [loading, setLoading] = useState (true)

  const { categoryId } = useParams()
  
  useEffect(() =>{
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
      
    asyncFunction (categoryId).then(response =>{
        setProducts (response)
      }).catch(error => {
        console.log(error)
      }).finally(()=>{
          setLoading (false)
      }) 
    },[categoryId])

 
  if (loading){
   return <Loader />
  }


  return (
      <div className='itemListContainer-container'>
        <h1>{categoryId ? "lista de " + categoryId : "lista de Productos"}</h1>
        <ItemList products={products}/>
        
      </div>
    )
}
export default ItemListContainer