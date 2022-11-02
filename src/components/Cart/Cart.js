import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext'
import { useContext } from 'react';


import  './Cart.css'

import iconDump from './assets/dump.png'




const Cart = ()=> {

  const {cart, totalQuantity , total, clearCart,removeItem} =useContext(CartContext)

  if(totalQuantity === 0) {
    return (
        <div>
    <h1>No hay Productos en el carrito</h1>
                <Link to="/">
                    <button className="css-button-arrow--black">Volver a la Tienda</button>
                </Link>
        </div>
    
    )
}

  

     if (cart.length === 0) {
      return( 
         <div>
         <h1>El carro esta vacio</h1>
         <Link className="cartGo" to={'/'}>Volver a la tienda</Link>
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
        <button className='css-button-arrow--black'  onClick={() =>{ clearCart(); alert()}}>Vaciar Carrito</button>
        <Link to={"/"} className="css-button-arrow--black">Volver a la tienda</Link>
        <Link to='/checkout' className='css-button-arrow--black'>Finalizar Comprar</Link>
          
                
        </section>
    
    </div>
    
    )
    }
        
        

  
  export default Cart
     
   
   




  

  

    
/*    <div className="card__brand">
    {cart.map(prod => (
      <div className="btnGridPos">
      <h5>Producto {prod.name}</h5>
      {/* <img src={prod.img} alt="Producto"/> */
/*      <ul>
          <li>Total: $ {prod.price * prod.quantity}</li>
          <li>Cantidad: {prod.quantity}</li>
          <button className='Space btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
      </ul>
     

     </div>
    ))}
      
    

    <button className='Space btn btn-primary'  onClick={() =>{ clearCart(cart); alert()}}>Vaciar Carrito</button>
    <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
    <Link to='/checkout' className='Option'>Finalizar Comprar</Link>
      
</div>
  )

}

 
 export default Cart*/
 
