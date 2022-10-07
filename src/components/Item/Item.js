import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom'

/*const Item = ({ img, name, price,id }) => {
   return( 
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
     
    )
   
}

export default Item


/*const Item = ({ img, name, category, price, description,stock }) => (
  <>
    <h1 className="title"></h1>
    <div className="productos">
      <div className="producto">
        <a href="#">
          <div className="producto"></div>
          <div className="producto__img">
            <img src={img} alt={name} />
          </div>
        </a>
        <div className="producto__footer">
          <h1>{name}</h1>
          <p>{category}</p>
          <p className="description">{description}</p>
          <p className="price">${price} </p>
          <p className="stock">stock disponible: {stock} </p>
        </div>
        <div className="bottom">
          <button className="btn">Añadir al carrito</button>
          <div>
            <a href="#" className="btn">Ver</a>
          </div>
        </div>
      </div>

    </div>

  </>
)*/

const Item = ({id, name, img, price }) => {
  return(
   
  <div className="productos">
      <div className="producto">
         
          <div className="producto__img">
            <img src={img} alt={name} />
          </div>
      
        <div className="producto__footer">
          <h1>{name}</h1>
          <p className="price">Precio:${price} </p>
        </div>
        <div className="bottom">
           <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
      </div>
    </div>


  

  )
  }




export default Item