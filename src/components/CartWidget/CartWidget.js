import Cart from "./assets/shoppcart.png";
import "./CartWidget.css";
import { Link } from "react-router-dom"

export default function CartWidget() {

  return (
    <Link to={"/cart"} className = "carrito">
        <button>
            <img className = "imagenCarrito" src={Cart} alt="carrito"/>
            0
        </button>  
    </Link>
)
}
  
