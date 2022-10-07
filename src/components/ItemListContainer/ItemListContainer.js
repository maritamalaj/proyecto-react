import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


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

  /*console.log (products)
    const productsMapped =products.map(prod=>   
    <div class="card" style="width: 18rem;">
      <img src= {img} className='' alt=""/>
        <div class="card-body">
         <h5 key = {prod.id} className='{prod.name}'>Card title</h5>
         <p className='{prod.price}'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
    </div>)
  console.log (productsMapped)*/
  
  if (loading){
   return <div className="spinner-border" role="status"></div>
  }


  return (
      <div onClick={() => console.log('click en itemlistcontainer')}>
        <h1>{greeting}</h1>
        <h1>Nuestros Productos</h1>
        <ItemList products={products}/>
        
      </div>
    )
}
export default ItemListContainer