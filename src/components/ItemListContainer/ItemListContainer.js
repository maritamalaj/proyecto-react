import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
const ItemListContainer = (props) => {


  const[products, setProducts]=useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState (false)
 
  
  useEffect(() =>{
    /*const asyncFunction = categoryId ? getProductsByCategory : getProducts*/
    setLoading(false); 
    if (categoryId){
      getProductsByCategory(categoryId)
      .then((response) => setProducts (response))
      .catch((error) => console.log(error))
      .finally(()=> setLoading (true));
    }else{
      getProducts()
      .then((response) => setProducts (response))
      .catch((error) => console.log(error))
      .finally(()=> setLoading (true));
      }
  }, [categoryId])

 
  

  return (
      <div>
        {loading && props.greeting}
        {loading ? (
        /*<h1>{categoryId ? "  " + categoryId : "Lista de Productos"}</h1>*/
        <ItemList products={products}/>
        ):(
         <Loader/ >
        )}
      </div>
    );
};
export default ItemListContainer;
