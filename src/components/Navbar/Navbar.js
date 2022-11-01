import "./Navbar.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { getDocs, collection,query,orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState([])

    useEffect(()=>{
    
        const collectionRef = query (collection(db, 'categories'), orderBy("order"));

        getDocs(collectionRef).then(response =>{
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data();
                const id = doc.id

                return {id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    },[])
 




  return (
   <nav className="container-nav"> 
      <div className="branding">
        <NavLink to={"/"}>
        <img src={logo} alt="logo" width="150" className="logo-logo"/>
        </NavLink>
        <span className="">
          Deco&Design
        </span>
      </div>
      <div className="nav-paths ">
        {
          categories.map(cat=>(
        
         <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}><img src={cat.img} alt={cat.alt} className="nav-paths-items"/>
         </NavLink>
        ))
       
        }
        <CartWidget />
        <span className=""></span>
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
    </div>
    
    -----------------------------------------------------


     <Link to="/" className="nav-paths-items">
           Home
        </Link>
        <Link to="/category/Espejos" className="nav-paths-items">
            Espejos
        </Link>
        <Link to="/category/Habitación" className="nav-paths-items">
            Deco&Habitación
        </Link>
        <Link to="/category/Deco" className="nav-paths-items">
          Deco&Bazar
        </Link>
        
    
    
    
    
    */

  


