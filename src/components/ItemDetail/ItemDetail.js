import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../../CartContext/CartContext'
//import swal from 'sweetalert'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    //const [goCart, setGoCart] = useState (false)

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)



    const handleOnAdd = (quantity) => {
       // setGoCart (true)
        const productToAdd = {
            id, name, price, img
            //agregar SWEETALRERT! ('success', `Se agrego correctamente ${quantity} ${name}`)
        }
    
        addItem (productToAdd, quantity)
       
      
    }
    
    const quantityAdded = getProductQuantity (id)
    
    
    
  return (
    <article className='detalleItem'>
        <div className='contenedorDetalle'>
            <div className='imagenDetailProducto'>
                <picture>
                    <img src={img} alt={name} />
                </picture>
            </div>
            <div className='detalle'>
                <div className='tituloProducto'>
                    <h2>{name}</h2>
                </div>
                <h3><span className='detalleDescripcion'>{description}</span></h3>
                <h3><span className='detalleAtributo'>Precio:</span> ${price}</h3>
                <h4><span className='detalleAtributo'>Stock:</span> {stock}</h4>
                <h4><span className='detalleAtributo'>Categoría:</span> {category}</h4>
            </div>
            <footer className='ItemFooter'>
                { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} category={category} />
                : <p>No hay stock</p>}
                {
                    
                        isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'grey'}}>Finalizar compra</Link>
                }
                
            </footer>


            
    
   
        </div>
    </article>
  )
}


  
  export default ItemDetail



  /*
            {goCart ? 
            <div className='detalleBotonera'>
            <Link to='/'>
                <button>Seguir comprando</button>
            </Link>
            <Link to='/cart'>
                <button>Finalizar compra</button>
            </Link>
        </div>
        :
        <div className='contadorDetalle'> <ItemCount  onAdd={handleOnAdd} initial={quantityToAdded} stock={stock} /> </div>*/