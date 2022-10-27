import {useState} from 'react'
import  './ItemCount.css'



const ItemCount = ({stock , initial , onAdd}) => {

    const [value, setValue] = useState (initial)

    const increment = () => {
        if (value < stock) {
        setValue (value +1)
        }
    }

    const decrement = () => {
        if (value > 0) {
            setValue (value -1)
         }

    }

    const empty = () =>{
        setValue(value === 1)
    }




    return (
        <div>
          

            <div className="contador">
                <button className="elements" onClick={decrement}> - </button> 
                <h2 className="elements">{value}</h2>
                <button  className="elements" onClick={increment}> + </button>
            </div>
            <div>
                <button className="botonTerminarCompra btn btn-outline-secundary" disabled= {stock <=0} type ="button" onClick={() => onAdd(value)}>Agregar al carrito</button>
                <button className="botonTerminarCompra btn btn-outline-secundary" id='button1'   onClick={empty}>Eliminar</button>
            </div>
        </div>
    )
} 




export default ItemCount