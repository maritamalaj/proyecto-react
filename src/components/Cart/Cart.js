import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext'
import { useContext } from 'react';
import swal from "sweetalert"


import  './Cart.css'




const Cart = ()=> {

  const {cart,total , removeItem ,clearCart} =useContext(CartContext)

  

  const alert = () =>{
    swal({
      title:"El carrito ha sido vaciado", 
      icon: "warning",
     }) }

     if (cart.length === 0) {
      return( 
         <div>
         <h1>El carro esta vacio</h1>
         <Link className="cartGo" to={'/'}>Home</Link>
         </div>
      )
     }
   
   




  

  return(
    <div className="card__brand">
    {cart.map(prod => (
      <div className="btnGridPos">
      <h5>Productooo{prod.name}</h5>
      {/* <img src={prod.img} alt="Producto"/> */}
      <ul>
          <li>Subtotal: $ {prod.price * prod.quantity * 1000}</li>
          <li>Cantidad: {prod.quantity}</li>
          <button className='Space btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
      </ul>
     </div>
    ))}
       
    <p>Total: $ {total(cart)}</p>

    <button className='Space btn btn-primary'  onClick={() =>{ clearCart(cart); alert()}}>Vaciar Carrito</button>
    <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
    <Link to='/checkout' className='Option'>Checkout</Link>
      
</div>
  )

}

 
 export default Cart
 
