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

    
 /*
   return(
    <div>
    <table className="tablaProductos">
        <tbody>
            <tr>
                <td><strong>Cantidad</strong></td>
                <td><strong>Productos</strong></td>
                <td><strong>Precio</strong></td>
                <td><strong>Eliminar</strong></td>
            </tr>
            {
                cart.map(prod => 
                    <tr key={prod.Id}>
                        <td className="fila">{prod.quantity}</td>
                        <td className="fila">{prod.name}</td>
                        <td className="fila">${prod.price}</td>
                        <td><button onClick={() => removeItem(prod.Id)}><img  alt="eliminar-producto" src={iconDump}/></button></td>
                    </tr> 
                    
            )}
        </tbody>
    </table>
    <section className="precioTotal">
        <p>Total: ${total}</p>
    </section>
    <section className="containerBotonesCartList">
    <button className='Space btn btn-primary'  onClick={() =>{ clearCart(cart); alert()}}>Vaciar Carrito</button>
    <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
    <Link to='/checkout' className='Option'>Finalizar Comprar</Link>
      
            
    </section>

</div>

)
}
export default ItemCart*/





    
    


