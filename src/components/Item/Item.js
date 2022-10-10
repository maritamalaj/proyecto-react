import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price,category }) => {
  
  return(
   
  <div className="productos">
      <div className="producto">
         
          <div className="producto__img">
            <img src={img} alt={name} />
          </div>
      
        <div className="producto__footer">
          <h1>{name}</h1>
          <p className="price">Precio:${price} </p>
          <p className="card-text">{category}</p>
        </div>
        <div className="bottom">
           <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
      </div>
    </div>

  )
  }




export default Item