import Cart from "./assets/shoppcart.png";
import "./CartWidget.css";
import { Link } from "react-router-dom"
import {  useContext } from "react";
import {CartContext} from '../../Context/CartContext'

export default function CartWidget() {
    
    const {totalQuantity}=useContext (CartContext)
    const quantity =  totalQuantity

  return (
    <Link to={"/cart"} className = "carrito">
        <button>
            <img className = "imagenCarrito" src={Cart} alt="carrito"/>
            <span id="contador1">{quantity}</span>
          
        </button>  
    </Link>
)
}
  
 /* {totalQuantity === 0 ? " " : totalQuantity}*/