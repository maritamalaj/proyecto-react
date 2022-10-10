import "./Navbar.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
<nav className="container-nav">
      <div className="branding">
        <img src={logo} alt="logo" width="150" className="logo-logo"/>
        <span className="">
          Deco&Design
        </span>
      </div>
      <div className="nav-paths ">
        <Link to="/" className="">
           Home
        </Link>
        <Link to="/category/Espejos" className="">
           . Espejos
        </Link>
        <Link to="/category/Habitación" className="">
           . Deco&Habitación
        </Link>
        <Link to="/category/Deco" className="">
          . Deco&Bazar
        </Link>
        <CartWidget />
      </div>
    </nav>
  );
}
 export default Navbar















  
   /* return(
      <div>
      <header>
     
        <div className="img-logo">
          <img src={logo} alt="logo" width="150" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
            <Link to={"/"}>Productos</Link>
            </li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
            <div className="Cart">
              <box-icon color="white"name="cart-alt"></box-icon>
              <span className="item_total">1</span>
            </div>
          </ul>
        </nav>
      </header>
    </div>*/

  


