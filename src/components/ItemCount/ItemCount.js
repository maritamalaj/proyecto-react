import {useState} from 'react'
import  './ItemCount.css'
import { Link } from "react-router-dom";



const ItemCount = ({stock , initial=1 , onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity< stock) {
        setQuantity (quantity +1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity -1)
         }

    }

    const empty = () =>{
        setQuantity(quantity === 1)
    }




    return (
        <div>
          

            <div className="contador">
                <button className="elements" onClick={decrement}> - </button> 
                <h2 className="elements">{quantity}</h2>
                <button  className="elements" onClick={increment}> + </button>
            </div>
            <div className='contador-footer'>
                <button className="botonTerminarCompra btn btn-outline-secundary" disabled= {stock <=0} type ="button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                <button className="botonTerminarCompra btn btn-outline-secundary" id='button1'   onClick={empty}>Eliminar</button>
                <Link to={'/'} className="botonTerminarCompra btn btn-outline-secundary" id='button'>Seguir Comprando</Link>
            </div>
        </div>
    )
} 




export default ItemCount