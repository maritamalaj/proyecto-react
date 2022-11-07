import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext'
import { useContext } from 'react';
import  './Cart.css'
import iconDump from './assets/dump.png'
import swal from 'sweetalert'




const Cart = ()=> {

  //const {cart,  getTotal, clearCart,removeItem} =useContext(CartContext)
  const {cart, totalQuantity, total, clearCart,removeItem} = useContext(CartContext)

    const alert = () =>{
     swal({
      title:"Ha vaciado el carrito", 
      icon: "warning",
      dangerMode: true,
     }) }

    if (totalQuantity === 0) {
      return( 
         <div>
         <h1>El carro esta vacio</h1>
         <Link className="css-button-arrow--black" to={'/'}>Volver a la tienda</Link>
         </div>
      )
    }

    
     
    return (  
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
                            <td><button onClick={() => removeItem(prod.id)}><img  alt="eliminar-producto" src={iconDump}/></button></td>
                        </tr> 
                        
                )}
            </tbody>
        </table>
        <section className="precioTotal">
            <p>Total: ${total}</p>
        </section>
        <section className="containerBotonesCartList">
        <button className='css-button-arrow--black'  onClick={() =>{ clearCart(cart); alert()}}>Vaciar Carrito</button>
        <Link to={"/"} className="css-button-arrow--black">Volver a la tienda</Link>
        <Link to='/checkout' className='css-button-arrow--black'>Finalizar Comprar</Link>
          
                
        </section>
    
    </div>
    
    )
}
  
export default Cart
     
   
   




  

  

    

