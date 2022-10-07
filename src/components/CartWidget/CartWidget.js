import Cart from "./assets/shoppcart.png";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <div className="container-widget">
      <div className="widget">
        <img src={Cart} alt="Cart" />
      </div>
      <div className="counter">
        {3}
      </div>
    </div>
  );
}