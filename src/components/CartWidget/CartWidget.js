import Cart from "./assets/shoppcart.png";
import "./CartWidget.css";
import { NavLink } from "react-router-dom"
import {  useContext } from "react";
import {CartContext} from '../../CartContext/CartContext'


export default function CartWidget() {
    
    const {totalQuantity}=useContext (CartContext)

  
    


  return (
    <NavLink to={"/cart"} className = "carrito" >
        <button>
            <img className = "imagenCarrito" src={Cart} alt="carrito"/>
            <span id="contador1">{totalQuantity}</span>
            <div id="cartTotalPrice">
            
            </div>
        </button>  
    </NavLink>
)
}
  
 /* {totalQuantity === 0 ? " " : totalQuantity}*/