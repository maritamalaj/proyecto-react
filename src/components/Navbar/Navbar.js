import "./navbar.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { getDocs, collection,query} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState([])

    useEffect(()=>{
    
        const collectionRef = query (collection(db, 'categories'));

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
          categories.map(category=>(
          <NavLink key={category.id} to={`/category/${category.label}`} className="nav-paths-items" aria-current="page"> {category.slug}</NavLink>
        ))
       
        }
        <CartWidget />
        <span className=""></span>
      </div>
    </nav>
  );
}
 export default Navbar















  

  


