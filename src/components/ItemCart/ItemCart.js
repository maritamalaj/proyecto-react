import { useContext } from 'react'
import './ItemCart.css'
import {CartContext} from '../../Context/CartContext'


const ItemCart= ({id, name, img, quantity, price })=>{
    const {removeItem } = useContext (CartContext)
    
    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <tr className="productoEnCarrito">
            <th scope="row"><img src={img} alt={name} title={name}/></th>
            <td className="tituloCarrito">{name}</td>
            <td className="precioCarrito">$ {price}</td>
            <td className="cantidad">{quantity}</td>
            <td className="precioTotalCarrito">$ {price * quantity}</td>
            <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>
          
        </tr>
    )
}
export default ItemCart

    
 