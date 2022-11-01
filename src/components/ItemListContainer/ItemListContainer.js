
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import {useAsync} from '../../hooks/useAsync'
import {getProducts} from '../../services/firestore/products'
import './ItemListContainer.css';




 const ItemListContainer = () => {
  const { categoryId } = useParams()

  const getProductsWithCategory = () => getProducts(categoryId)

  const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


  if(loading) {
        return     <Loader />
  }

  if(error) {
      return <h1>Hubo un error...</h1>
  }

  return (
      <div>
          <h1>{}</h1>
          <ItemList products={products} />
      </div>
  )
}

/*const ItemListContainer = () => {

  const[products, setProducts]=useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState (true)


 

 
  
 useEffect(() =>{
    setLoading(true)
    const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })  
    }, [categoryId])

    if(loading) {
      return <h1>Cargando productos...</h1>
  }


   


return (
    <div>
      {greeting}
      {!loading ? (
     
      <ItemList products={products}/>
      ):(
       <Loader/ >
      )}
    </div>
  );
};*/
export default ItemListContainer;



    


    












    /*
    setLoading(true); 
    const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products' );
        
        if (categoryId) {
          const queryFilter = query (queryCollection, where ('category','==' , categoryId))
          getDocs(queryFilter)
          .then (res => setProducts (res.docs.map (products => ({id: products.id,...products.data()}))))
          .finally(()=> {
            setLoading(false)

          })
        }

        else{
          getDocs (queryCollection)
          .then (res => setProducts(res.docs.map (products => ({id: products.id, ... products.data()}))))
          .finally(() =>{
            setLoading (false)

          })
        }

  }, [categoryId])    

  if (loading) {
    return (
        <div className='itemDetailContainer'>
            <Loader/>
        </div>)
  }*/

   






  
   