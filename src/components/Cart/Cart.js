import { Link } from 'react-router-dom';
import { CartContext} from '../../Context/CartContext'

import { useContext } from 'react';
import swal from "sweetalert"

import  './Cart.css'




const Cart = ()=> {

  const {cart,getTotal ,removeItem, clearCart} = useContext(CartContext)

  const alert = () =>{
    swal({
      title:"El carrito ha sido vaciado", 
      icon: "warning",
     }) }
  

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
    <p>Total: $ {getTotal(cart)}</p>
    <button className='Space btn btn-outline-dark'>Generar orden de compra</button>
    <button className='Space btn btn-primary'  onClick={() =>{ clearCart(cart); alert()}}>Vaciar Carrito</button>
    <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
      
</div>
)
  
      /*<div className="container">
        <h2 className="miCarrito" name="carrito">MI CARRITO</h2>

        <div className="row">
              <div className="table-responsive">
              <table className="table caption-top">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">-</th>
                  </tr>
                </thead>
                <tbody id="carrito">
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
                </tbody>
              </table>
              </div>
      
              <div className="calculo">
                <ul>
                  <li id="total">$ {getTotal}</li>
                  <li>TOTAL</li>
                </ul>
              </div>

              <div className="botonesCarrito">
                <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
                <div className="botonesCarritoPrincipales">
                  <input onClick={() =>{ clearCart(cart); alert()}}id="vaciarCarrito" className="btn botonVaciarCarrito" type="button" value="VACIAR CARRITO"/>
                  <input onClick={() => removeItem()} id="eliminarCarrito" className="btn botonVaciarCarrito" type="button" value="Eliminar"/>
                  <Link to={"/checkout"} className="btn botonComprar" type="button">COMPRAR</Link>
                  </div>
              </div>
          </div>
      </div>  
  )*/

}

 
 export default Cart
 
 




  /*console.log (cart);
    if (cart.length === 0)
    return (
        <div>
        <p> No hay elementos en el carrito </p>
        <Link to='/'> Comenzar compra</Link>
        </div>
    )

  
    return (
      <div>
          <span id="contador">{totalQuantity}</span>
          {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
          <p>Total a Pagar: ${total}</p>
      </div>

  
  )
}

export default Cart 


/*import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext'
import ItemCart from "../ItemCart/ItemCart";
import '../../asyncMock'

const Cart = () => {
    const {cart,totalPrice,totalProducts} = useContext(CartContext);

    console.log (cart);
    if (cart.length === 0)
    return (
        <div>
        <p> No hay elementos en el carrito </p>
        <Link to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            <span id="contador">{totalProducts}</span>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p>Total a Pagar: ${totalPrice}</p>
        </div>

    )
}*/






/*import './Cart.css'
import { Link } from "react-router-dom"

import {useCart} from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'


const Cart = () => {
    
  
  const { Cart, totalPrice, clearCart } = useCart()
  
  const Swal = require()

  const vaciarCarrito = () => {
    Swal.fire({
      background: '#ffffff',
      color: '#001fff',
      title: '¿Esta seguro que desea vaciar el carrito?',
      icon: 'warning',
      iconColor: '#ffa200',
      showCancelButton: true,
      confirmButtonColor: '#00b400',
      cancelButtonColor: '#ff0000af',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire({
          background: '#ffffff',
          color: '#001fff',
          icon: 'success',
          iconColor: '#11cf00',
          title: 'Vaciado!',
          html: <h4>El carrito ha sido Vaciado</h4>,
          confirmButtonColor: '#11cf00',
          },
          'success'
        )  

        clearCart()
      }
    })       
  }

  if (Cart.length === 0) {
    return (
      <div className="sinProductos">
        <h2 className="noProductos">Tu carrito Está vacio</h2>
        <Link to={"/"} className="btn botonIrALaTienda">Volver a la Tienda</Link>
      </div>
    )
  }

  
  
  
  
  
  
  return (
        <div className="container">
          <h2 className="miCarrito" name="carrito">MI CARRITO</h2>

          <div className="row">
                <div className="table-responsive">
                <table className="table caption-top">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">PRODUCTO</th>
                      <th scope="col">PRECIO</th>
                      <th scope="col">CANTIDAD</th>
                      <th scope="col">TOTAL</th>
                      <th scope="col">-</th>
                    </tr>
                  </thead>
                  <tbody id="carrito">
                  {Cart.map(product => <ItemCart key={product.id} {...product}/>)}
                  </tbody>
                </table>
                </div>
        
                <div className="calculo">
                  <ul>
                    <li id="total">$ {totalPrice}</li>
                    <li>TOTAL</li>
                  </ul>
                </div>

                <div className="botonesCarrito">
                  <Link to={"/"} className="btn botonVolverALaTienda">Volver a la tienda</Link>
                  <div className="botonesCarritoPrincipales">
                    <input onClick={() => vaciarCarrito()} id="vaciarCarrito" className="btn botonVaciarCarrito" type="button" value="VACIAR CARRITO"/>
                    <input id="comprar" className="btn botonComprar" type="button" value="COMPRAR" data-bs-toggle="modal" data-bs-target="#exampleModal"/>  
                  </div>
                </div>
            </div>
        </div>  
    )

}

export default Cart*/