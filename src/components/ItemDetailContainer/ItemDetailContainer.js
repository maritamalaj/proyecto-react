import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { productId } = useParams()

  useEffect(() => { //traigo fstore almaceno en una variable
    const querydb = getFirestore();
    const queryDoc = doc (querydb, 'products', productId); //con un puntero cargo los datos q quiero traer
    getDoc(queryDoc)// lo traigo
    .then (res => setProducts({ id: res.id, ...res.data()}))  //
    .finally (()=>{
      setLoading(false)
    })

    
  
  },[productId])

  if (loading) {
    return <div className='spinner'>  <Loader
        size={60}

        speed={1}


    />
    </div>

}
return (
    <div>
        <ItemDetail  {...products} />

    </div>
)
}

export default ItemDetailContainer;


     



  
  







/*const ItemDetailContainer = () => {
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

export default ItemDetailContainer;*/