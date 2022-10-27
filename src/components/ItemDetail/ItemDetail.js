import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [goCart, setGoCart] = useState (false)

    const { addItem, getProductQuantity } = useContext(CartContext)



    const handleOnAdd = (quantity) => {
        setGoCart (true)
        const productToAdd = {
            id, name, price, img,quantity
        }
    
        addItem (productToAdd)
       
      
    }
    
    const quantityToAdded = getProductQuantity (id)
    
    
    
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
        <div className='contadorDetalle'> <ItemCount  onAdd={handleOnAdd} initial={quantityToAdded} stock={stock} /> </div>
    }
   
        </div>
    </article>
  )
}


  
  export default ItemDetail