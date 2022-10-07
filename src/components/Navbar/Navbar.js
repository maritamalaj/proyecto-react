import "./Navbar.css";
import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget"
export default function Navbar() {
    return(
      <div>
      <header>
        <div className="img-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Contáctanos</a>
            </li>
            <li className="Cart">
              <a href="">
              <CartWidget />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>

    );
}

